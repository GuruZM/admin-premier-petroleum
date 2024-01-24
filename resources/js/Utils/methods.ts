export function formatCurrency(amount, currencyCode = 'ZMW', locale = 'en-US') {
  // Use Intl.NumberFormat to format the currency
  const formattedAmount = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0, // Set minimumFractionDigits to 0 to remove decimals
    maximumFractionDigits: 0, // Set maximumFractionDigits to 0 to remove decimals
  }).format(amount);

  const amountWithoutCurrency = formattedAmount.split(' ')[0];
  return amountWithoutCurrency;
}


export function roundToDecimalPlaces (number, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(number * factor) / factor;
};