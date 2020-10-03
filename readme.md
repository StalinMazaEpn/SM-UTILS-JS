# SmUtilsJs

Utilidades para trabajar con JSON, Números, ETC que me han sido útiles en el momento de desarrollar.

## Versión Actual

1.0.0

## Uso

**JSON**

```TypeScript
import IsJsonString from "@smtech97/sm-utils/json";

IsJsonString('{"name": "Juan"}')
```

or

```JavaScript
const smUtils = require('@smtech97/sm-utils/json');

console.log(smUtils.IsJsonString('{"name": "Juan"}'));
```


**Números**

```TypeScript
import roundFormatter from "@smtech97/sm-utils/numbers";

roundFormatter('{"name": "Juan"}') //true
```

or

```JavaScript
const smUtils = require('@smtech97/sm-utils/numbers');

console.log(smUtils.roundFormatter("20.4848484")); //20.48
console.log(smUtils.roundFormatter(20.4848484)); //20.48
```

## Autor
> Stalin Maza