// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var output = '';

  // array
  if (Array.isArray(obj)) {
    var array = [];
    for (let value of obj) {
      array.push(stringifyJSON(value));
    }
    output = '[' + array.join(',') + ']';
  }

  // object
  else if (typeof obj === 'object') {
    if (obj === null) return 'null';
    var array = [];
    for (let key in obj) {
      if (stringifyJSON(obj[key]) !== '') {
        array.push('"' + key + '":' + stringifyJSON(obj[key]));
      }
    }
    output = '{' + array.join(',') + '}';
  }

  // string
  else if (typeof obj === 'string') {
    output = '"' + obj.toString() + '"';
  }

  // unallowed
  else if (typeof obj === 'undefined' || typeof obj === 'function') {
    return '';
  }

  // primitive values and fallback
  if (output === '') return obj.toString();

  return output;
};
