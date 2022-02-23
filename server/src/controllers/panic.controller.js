const { ProviderType } = require('@prisma/client')
const prisma = require('../prismaClient')

const emptyReq = { msg: 'Please enter all fields' }

const createPanic = async (req, res) => {
  const { location, requiredProviderType } = req.body

  if (!location || !requiredProviderType) {
    return res.status(400).json(emptyReq)
  }

  const enumProviderType = requiredProviderType.toUpperCase()
  if (
    enumProviderType !== ProviderType.HEALTH &&
    enumProviderType !== ProviderType.CRIME
  ) {
    return res
      .status(400)
      .json({ msg: 'Please enter either HEALTH or CRIME for providerType' })
  }

  const panic = await prisma.panics.create({
    data: {
      location: location,
      required_provider_type: enumProviderType,
      user_id: req.user.user_id
    }
  })

  return panic
    ? res.json({
        panic_id: panic.panic_id,
        location: panic.location,
        time: panic.created_at,
        providerType: panic.required_provider_type,
        user: panic.user
      })
    : res.status(400).json({ msg: 'Something went wrong' })
}

module.exports = { createPanic }
