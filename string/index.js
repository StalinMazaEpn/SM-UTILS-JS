const validateRuc = (ced) => {
    var cedula = ''
    var ruc = ''
    if (ced.length === 13) {
        var cedula = ''
        for (let index = 0; index < 13; index++) {
            if (index < 10) {
                cedula += ced[index];
            }
            if (index >= 10 && index <= 13) {
                ruc += ced[index];
            }


        }
    }
    var cad = cedula.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;
    var valid = true
    if (cad !== "" && longitud === 10) {
        for (var i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
            }
        }

        total = total % 10 ? 10 - total % 10 : 0;


        if (cad.charAt(longitud - 1) == total) {
            if (ruc === '001') {
                valid = true;
            } else {
                valid = false
            }

        } else {
            valid = false;

        }
    } else {
        valid = false;
    }
    return valid
}

const validateCedula = (cad) => {
    if (!cad) { return false }
    var cad = cad;
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;
    var valid = true
    if (cad !== "" && longitud === 10) {
        for (var i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
            }
        }

        total = total % 10 ? 10 - total % 10 : 0;


        if (cad.charAt(longitud - 1) == total) {
            valid = true;
        } else {
            valid = false;

        }
    } else {
        valid = false;
    }
    return valid
}

module.exports = {
    validateRuc,
    validateCedula
}