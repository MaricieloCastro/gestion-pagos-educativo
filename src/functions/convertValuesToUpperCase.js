export const convertValuesToUpperCase = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = typeof obj[key] === 'string' ? obj[key].toUpperCase() : obj[key]
    return acc
  }, {})
}
