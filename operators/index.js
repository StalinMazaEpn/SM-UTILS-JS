const numbers = require("../numbers");

class DateFormatter {
  static formatDate(date) {
    const fecha = new Date(date);
    const year = fecha.getFullYear();
    const month = fecha.getMonth() + 1;
    const day = fecha.getDate() + 1;
    const fechaS = year + "/" + month + "/" + day;
    return new Date(fechaS);
  }
  static dateToString(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }
}

function isObject(a) {
  return !!a && a.constructor === Object;
}
const isObjectEmpty = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] != null && obj[key] != undefined) {
      return false;
    }
  }
  return true;
};

const intFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function serializeData(body, options) {
  const data = { ...body };
  const serializedData = {};
  const defaultOptions = {
    excludeEmptyStrings: false,
    getBoolsAsString: false,
  };
  const serializeOptions = { ...defaultOptions, ...options };
  if (!isObject(body)) {
    return serializeFn(body, serializeOptions);
  }
  const bodyKeys = Object.getOwnPropertyNames(data);
  for (const attr of bodyKeys) {
    if (Array.isArray(data[attr])) {
      const arrayData = data[attr]
        .filter((row) => row != null)
        .map((row) => serializeData(row, serializeOptions));
      serializedData[attr] = arrayData;
    } else if (isObject(data[attr])) {
      if (!isObjectEmpty(data[attr])) {
        serializedData[attr] = serializeData(data[attr]);
      }
    } else {
      serializedData[attr] = serializeFn(data[attr], serializeOptions);
    }
  }
  return removeNulls(serializedData);
}

function serializeFn(data, serializeOptions) {
  if (data === "") {
    if (!serializeOptions.excludeEmptyStrings) {
      return data;
    }
    return null;
  } else if (data == undefined) {
    return null;
  } else if (typeof data === "boolean") {
    if (serializeOptions.getBoolsAsString) {
      return data ? "1" : "0";
    } else {
      return data ? 1 : 0;
    }
  } else if (typeof data === "number" && data === -10) {
    return null;
  } else if (data instanceof Date) {
    return DateFormatter.dateToString(data);
  } else {
    return data;
  }
}

function removeNulls(obj) {
  var isArray = obj instanceof Array;
  for (var k in obj) {
    if (obj[k] === null) isArray ? obj.splice(k, 1) : delete obj[k];
    else if (typeof obj[k] == "object") removeNulls(obj[k]);
    if (isArray && obj.length == k) removeNulls(obj);
  }
  return obj;
}

module.exports = {
  serializeData,
  removeNulls,
};
