const smJson = require('./json');
const smNumbers = require('./numbers');
const smHttp = require('./http');
const smString = require('./string');

// console.log(smJson.IsJsonString("48"));
// console.log(smJson.IsJsonString(8));
// console.log(smJson.IsJsonString([]));
// console.log("[]" + smJson.IsJsonString("[]"));
// console.log(smJson.IsJsonString(true));
// console.log(smJson.IsJsonString("{}."));
// console.log("{}" + smJson.IsJsonString("{}"));
// console.log(smNumbers.roundFormatter("20.4848484"));
console.log(smNumbers.roundFormatter({}, true));

// console.log(smHttp.resolveHttpMessageError('{"status": "success", "data": []}'));
const errors = [
    { "firstname": "La longitud máxima es 60 caracteres" },
    { "lastname": "La longitud máxima es 80 caracteres" }
];
// console.log(smHttp.resolveHttpMessageError(errors));

// console.log(smString.validateRuc("123456789"));
// console.log(smString.validateRuc("1725452609001"));

// console.log(smString.validateCedula("123456789"));
// console.log(smString.validateCedula("1725452609"));