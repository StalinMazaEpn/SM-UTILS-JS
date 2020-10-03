const intFormatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const roundFormatter = (value, toNumber=false) => {
    if(value == null || value == undefined){return null}
    if (toNumber) {
        return parseFloat(intFormatter.format(value))
    }
    return intFormatter.format(value)
}

module.exports = {
    roundFormatter
}