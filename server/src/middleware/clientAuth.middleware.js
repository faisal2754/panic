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
      const { user_id } = jwt.verify(token, process.env.JWT_SECRET)
      console.log(user_id)
      req.user = await prisma.users.findFirst({
        where: { user_id },
        select: {
          user_id: true,
          first_name: true,
          last_name: true,
          email: true,
          phone: true,
          emergency_contact: true
        }
      })

      console.log('user is: ', req.user)

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
