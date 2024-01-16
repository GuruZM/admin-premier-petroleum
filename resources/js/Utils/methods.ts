export function formatCurrency(amount, currencyCode = 'ZMW', locale = 'en-US') {
    // Use Intl.NumberFormat to format the currency
    const formattedAmount = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
    }).format(amount);
    const amountWithoutCurrency = formattedAmount.split(' ')[0];

    return amountWithoutCurrency;
  }