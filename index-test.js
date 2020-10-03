const smJson = require('./json');
const smNumbers = require('./numbers');

console.log(smJson.IsJsonString("48"));
console.log(smJson.IsJsonString(8));
console.log(smJson.IsJsonString([]));
console.log("[]" + smJson.IsJsonString("[]"));
console.log(smJson.IsJsonString(true));
console.log(smJson.IsJsonString("{}."));
console.log("{}" + smJson.IsJsonString("{}"));
console.log(smNumbers.roundFormatter("20.4848484"));
console.log(smNumbers.roundFormatter("20.4848484", true));