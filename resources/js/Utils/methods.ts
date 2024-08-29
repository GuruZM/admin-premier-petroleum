export function formatCurrency(amount, currencyCode = "ZMW", locale = "en-US") {
    // Use Intl.NumberFormat to format the currency
    const formattedAmount = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currencyCode,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);

    const amountWithoutCurrency = formattedAmount.split(" ")[0];
    return amountWithoutCurrency;
}

export function formatNumber(
    number,
    minimumFractionDigits = 0,
    maximumFractionDigits = 0,
    locale = "en-US"
) {
    const formattedNumber = new Intl.NumberFormat(locale, {
        minimumFractionDigits,
        maximumFractionDigits,
    }).format(number);

    return formattedNumber;
}

export function roundToDecimalPlaces(number, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}
