exports.isNumeric = data => !isNaN(data)
exports.isAlphaNumeric = data => /^[a-z0-9]+$/i.test(data)