const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const { ProviderType } = require('@prisma/client')

const prisma = require('../prismaClient')

const emptyReq = { msg: 'Please enter all fields' }

const register = async (req, res) => {
  const { firstName, lastName, email, password, phone, providerType } = req.body

  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !phone ||
    !providerType
  ) {
    return res.status(400).json(emptyReq)
  }

  const enumProviderType = providerType.toUpperCase()

  if (
    enumProviderType !== ProviderType.HEALTH &&
    enumProviderType !== ProviderType.CRIME
  ) {
    return res
      .status(400)
      .json({ msg: 'Please enter either HEALTH or CRIME for providerType' })
  }

  const userExists = await prisma.service_providers.findFirst({
    where: { email }
  })

  if (userExists) {
    return res.status(400).json({ msg: 'User already exists' })
  }

  const hashedPass = await argon2.hash(password)

  const user = await prisma.service_providers.create({
    data: {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: hashedPass,
      phone: phone,
      provider_type: enumProviderType
    }
  })

  return user
    ? res.json({
        id: user.service_provider_id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        providerType: user.provider_type,
        token: generateToken(user.service_provider_id)
      })
    : res.status(400).json({ msg: 'Something went wrong' })
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json(emptyReq)
  }

  const user = await prisma.service_providers.findFirst({ where: { email } })

  if (user && (await argon2.verify(user.password, password))) {
    return res.json({
      id: user.service_provider_id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      providerType: user.provider_type,
      token: generateToken(user.service_provider_id)
    })
  } else {
    return res.status(400).json({ msg: 'Incorrect email or password' })
  }
}

const me = async (req, res) => {
  res.json(req.user)
}

const generateToken = (client_id) => {
  return jwt.sign({ client_id }, process.env.JWT_SECRET, {
    expiresIn: '60d'
  })
}

module.exports = { register, login, me }
