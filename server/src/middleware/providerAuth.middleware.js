const jwt = require('jsonwebtoken')
const prisma = require('../prismaClient')

const protect = async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const { service_provider_id } = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await prisma.service_providers.findFirst({
        where: { service_provider_id },
        select: {
          service_provider_id: true,
          first_name: true,
          last_name: true,
          email: true,
          phone: true,
          provider_type: true
        }
      })

      next()
    } catch (error) {
      console.log(error)
      res.status(401).json({ msg: 'Not authorised' })
    }
  }

  if (!token) {
    res.status(401).json({ msg: 'Not authorised' })
  }
}

module.exports = protect
