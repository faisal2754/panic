const { PrismaClient } = require('@prisma/client')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

const prisma = new PrismaClient()

const emptyReq = { msg: 'Please enter all fields' }

const register = async (req, res) => {
  const { firstName, lastName, email, password, phone, emergencyContact } =
    req.body

  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !phone ||
    !emergencyContact
  ) {
    return res.status(400).json(emptyReq)
  }

  const userExists = await prisma.user.findFirst({ where: { email } })

  if (userExists) {
    return res.status(400).json({ msg: 'User already exists' })
  }

  const hashedPass = await argon2.hash(password)

  const user = await prisma.user.create({
    data: {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: hashedPass,
      phone: phone,
      emergency_contact: emergencyContact
    }
  })

  return user
    ? res.json({
        id: user.user_id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        token: generateToken(user.user_id)
      })
    : res.status(400).json({ msg: 'Something went wrong' })
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json(emptyReq)
  }

  const user = await prisma.user.findFirst({ where: { email } })

  if (user && (await argon2.verify(user.password, password))) {
    return res.json({
      id: user.user_id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      token: generateToken(user.user_id)
    })
  } else {
    return res.status(400).json({ msg: 'Incorrect email or password' })
  }
}

const generateToken = (client_id) => {
  return jwt.sign({ client_id }, process.env.JWT_SECRET, {
    expiresIn: '60d'
  })
}

module.exports = { register, login }
