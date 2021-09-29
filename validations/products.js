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
    
    for (let [key, testFunction] of Object.entries(validations)) {
      if (!(key in data)) throw new RequestValidationError(`${key} required`)
      testFunction(data[key])
      // if (Object.keys(validations).includes(key) ) 
      // validations[key](value)
    }
  }
  catch(err) {
    throw err
  }
}