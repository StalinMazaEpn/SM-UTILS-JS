const operators = require('../operators');

const dataSimple = [114, 24.540284, null, new Date("2020-10-17"), "24.0000", {"Fecha": new Date("2020-10-17")}, [{"nombre": "Americo", edad: undefined}]];
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

/*console.warn(
    JSON.stringify(
        [dataSimple.map(row=>
           operators.removeNulls( operators.serializeData(row, {
            roundDigits: 4
            }))
        ).filter(row=>row!=null)]
    , null, 4)
);*/

/*console.warn(
    JSON.stringify(operators.removeNulls(operators.serializeData(data))
    , null, 4)
);*/

