## HTTP

>@smtech97/sm-utils/http

**resolveHttpMessageError**

Recibe un JSON y permite obtener el primer valor del objeto para mostrar un mensaje, por ejemplo en un array de mensajes de error, mostrar el primer error de validación

```js
const apiErrors = {
    "errors": [
        { "firstname": "La longitud máxima es 60 caracteres" },
        { "lastname": "La longitud máxima es 60 caracteres" }
    ]
}

console.log(resolveHttpMessageError(apiErrors)) 
// La longitud máxima es 60 caracteres
```


## JSON

>@smtech97/sm-utils/json

**IsJsonString**

Verifica que el valor que recibe es un string y tiene un formato válido
```js
console.log(IsJsonString("4")) // false
console.log(IsJsonString("[]")) // true
console.log(IsJsonString(true)) // false
console.log(IsJsonString("{}")) // true
```

**ReduceArrayByKeys**

Permite mapear un array de objetos filtrando cada objeto para que solo devuelva las keys especificadas

```js
const people = [
    {id: 1, name: "Juan", "age": 25},
    {id: 3, name: "Victoria", "age": 18}
]

console.log(ReduceArrayByKeys(people, ['id'])) 
// [{id: 1, id: 3}]
console.log(ReduceArrayByKeys(people, ['name'])) 
// [{name: "Juan", name: "Victoria"}]
```

## Numbers

>@smtech97/sm-utils/numbers

**roundFormatter**

Permite redondear el valor que se le pasa al número de decimales especificado.

Las opciones de configuración son:

* toNumber: Si de desea obtener el valor como un número y no un string, por defecto es false
* digits: número de dígitos a obtener, por defecto 2
* defaultValue: valor por defecto, por defecto null

```js
console.log(roundFormatter("250.25141")) // "250.25" 
console.log(roundFormatter(399.245)) // 399.25 
console.log(roundFormatter("250.25141", {toNumber: true})) // 250.25 
console.log(roundFormatter({}, {defaultValue: 0})) // 0

```

## String

>@smtech97/sm-utils/string

**Validar RUC Ecuatoriana**

Permite validar si el valor que recibe es un RUC ecuatoriano válido

```js
console.log(validateRuc("123456789001")); //false
```

**Validar Cédula Ecuatoriana**

Permite validar si el valor que recibe es una cédula ecuatoriana válida

```js
console.log(validateCedula("123456789")); //false
```

## Operadores
>@smtech97/sm-utils/operators

**Serializar datos**

Permite serializar datos de un array, un objecto o una variable, recibe el valor y
las opciones de configuración en un objeto, no incluye valores nulos o indefinidos

***Opciones ({})***
{
- excludeEmptyStrings: false, 
//Habilita el no incluir strings vacios al serializar
- getBoolsAsString: false, 
//convertir valores booleanos, si es true se devuelve un string caso contrario un numero 0-1
```js
console.log(serializeData(
    [114, 24.5402, new Date("2020-10-17"), "24.0000", 
    {"Fecha": new Date("2020-10-17")}, 
    [{"nombre": "Americo"}]]
)); 
/*
[
    114, 24.5402, "2020-10-17", "24.0000",
    { "Fecha": "2020-10-17" },
    [ { "nombre": "Americo" }]
]
*/
```

**Remover Nulos**

Permite eliminar valores nulos o indefinidos de un array o un objecto

```js
console.log(removeNulls({"id": 1, precio: null})); 
//{"id":1}
console.log(removeNulls([{"id": 1, precio: null}])); 
//[{"id":1}]
console.log(removeNulls([{"id": 1, precio: null}, 8, "4", null])); 
//[{"id":1},8,"4"]
```