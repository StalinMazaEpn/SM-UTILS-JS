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
    return true;
}


module.exports = {
    IsJsonString
}