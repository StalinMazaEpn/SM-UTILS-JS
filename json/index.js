function IsJsonString(str) {
    try {
        const parsed = JSON.parse(str);
        if (parsed && typeof parsed === "object") {
            return true;
        }
        return false;
    } catch (e) {
        return false;
    }
}

const ReduceArrayByKeys = (array, keys_to_keep) => array.map(o => keys_to_keep.reduce((acc, curr) => {
    acc[curr] = o[curr];
    return acc;
}, {}));


module.exports = {
    IsJsonString,
    ReduceArrayByKeys
}