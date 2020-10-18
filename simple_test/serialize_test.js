const operators = require('../operators');

const dataSimple = [114, 24.5402, new Date("2020-10-17"), "24.0000", {"Fecha": new Date("2020-10-17")}, [{"nombre": "Americo"}]];
const data = {
  "id": 114,
  "precio": 24.54020,
  "Fecha": new Date("2020-10-17"),
  "TotalPeso": "24.000000",
  "ItemId": {
    "Codigo": "PP",
    "Compra": true,
  },
  "pesaje_detalles": [
    {
      "id": 1302,
      "RangoId": 2,
      "subido": false,
      "ComprobanteId": null,
    }
  ]
}
const dataArray = [data];
//const dataSerialized = operators.removeNulls(operators.serializeData(data)); //Works on Object
//const dataSerialized = operators.removeNulls(operators.serializeData(dataArray)); //Not Works Correctly
//const dataSerialized = dataArray.map(row=>operators.removeNulls(operators.serializeData(row))); //Works on Array
//const dataSerialized = dataSimple.map(row=>operators.removeNulls(operators.serializeData(row)))
//console.log(JSON.stringify(dataSerialized, null, 4));
console.log(JSON.stringify(operators.removeNulls([{"id": 1, precio: null, age: undefined}, 8, "4", null], null, 4)));
//console.log(operators.serializeData(new Date()))
//console.log(JSON.stringify(dataSimple.map(row=>operators.removeNulls(operators.serializeData(row))), null, 4))