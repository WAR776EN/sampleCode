exports.errorMaster = async (err, req, res, next) => {
  try {
    res.status(400).json({
      success: false,
      message: err.message,
      errors: err
    })
  }
  catch (err) {
    next(err)
  }
}

exports._404handler = async ( req, res, next) => {
  try {
    res.status(404).send(`404 !! route ${req.originalUrl} not found`)
  }
  catch(err) {
    throw err
  }
}