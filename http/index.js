const resolveHttpMessageError = (http_error) => {
    if (typeof http_error !== 'string') {
        const properties = Object.getOwnPropertyNames(http_error);
        console.log('properties', properties)
        for (var i = 0; i < properties.length; i++) {
            const value = http_error[properties[i]];
            if (typeof value === 'boolean') {
                return ''
            } else {
                return resolveHttpMessageError(value);
            }
        }
    } else {
        return http_error;
    }
}

module.exports = {
    resolveHttpMessageError
}
