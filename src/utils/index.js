export const sumOfArrayObjectKeys = (array, objKey) =>
  array.reduce((sum, obj) => {
    return sum + obj[objKey]
  }, 0)

export const integerToCurrency = (
  amount,
  currency = 'USD',
  locale = 'en-US'
) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2
  })

  return formatter.format(amount)
}
