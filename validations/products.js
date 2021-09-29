const { RequestValidationError } = require('../errDefinitions')
const { isAlphaNumeric, isNumeric } = require('../utils/common')

exports.validateProduct = data => {
  try {
    const validations = {
      name: dataTest => {
        // if (!dataTest) throw new RequestValidationError('name required')
      },
      price: dataTest => {
        if (!isNumeric(dataTest)) throw new RequestValidationError('price must be alphanumeric')
      },
      code: dataTest => {
        // if (!isAlphaNumeric(dataTest)) throw new RequestValidationError('code must be alphanumeric')
      },
      stock: dataTest => {
        if (!isNumeric(dataTest)) throw new RequestValidationError('stock must be alphanumeric')
      }
    }
    for (let [key, value] of Object.entries(data)) {
      if (!key) throw new RequestValidationError(`${key} required`)
      validations[key](value)
    }
  }
  catch(err) {
    throw err
  }
}