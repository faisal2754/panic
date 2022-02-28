const { ProviderType } = require('@prisma/client')
const prisma = require('../prismaClient')

const emptyReq = { msg: 'Please enter all fields' }

const createPanic = async (req, res) => {
  const { locationLat, locationLong, requiredProviderType } = req.body

  if (!locationLat || !locationLong || !requiredProviderType) {
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
      locationLat: locationLat,
      locationLong: locationLong,
      required_provider_type: enumProviderType,
      user_id: req.user.user_id
    }
  })

  return panic
    ? res.json({
        panic_id: panic.panic_id,
        locationLat: panic.locationLat,
        locationLong: panic.locationLong,
        time: panic.created_at,
        providerType: panic.required_provider_type,
        user: panic.user
      })
    : res.status(400).json({ msg: 'Something went wrong' })
}

const updatePanic = async (req, res) => {
  const { panicId, status } = req.body

  const enumStatus = status.toUpperCase()

  if (enumStatus !== 'PENDING' && enumStatus !== 'RESOLVED') {
    return res
      .status(400)
      .json({ msg: 'Please enter either PENDING or RESOLVED for status' })
  }

  if (!panicId || !status) {
    return res.status(400).json(emptyReq)
  }

  const updatedPanic = await prisma.panics.update({
    where: { panic_id: Number(panicId) },
    data: { status: enumStatus }
  })

  return res.json(updatePanic)
}

const getPanics = async (req, res) => {
  const panics = await prisma.panics.findMany({
    include: {
      user: {
        select: { first_name: true, last_name: true, email: true, phone: true }
      }
    }
  })

  return panics
    ? res.json(panics)
    : res.status(400).json({ msg: 'Something went wrong' })
}

module.exports = { createPanic, getPanics, updatePanic }
