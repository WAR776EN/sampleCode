class RequestValidationError extends Error {
  constructor(message) {
    super(message),
    this.name = 'RequestValidationError'
  }
}

module.exports = {
  RequestValidationError
}