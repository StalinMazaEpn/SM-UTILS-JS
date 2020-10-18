const roundFormatter = (value, options) => {
    let valueRounded = null;
    const defaultOptions = {
        toNumber: false,
        digits: 2,
        defaultValue: null
    }

    const config = {...defaultOptions, ...options};
    const intFormatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: config.digits,
        maximumFractionDigits: config.digits,
    });
    if(value == null || value == undefined){return config.defaultValue}

    const valueFormatted = intFormatter.format(value);
    if (config.toNumber) {
        valueRounded = parseFloat(valueFormatted)
    }
    valueRounded = valueFormatted;
    if(isNaN(valueRounded)){return config.defaultValue}
    return valueRounded;
}

module.exports = {
    roundFormatter
}