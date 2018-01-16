// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var count = 0;
  var stringifiedObj = '';
  // your code goes here
  if (obj === null) {
    return 'null';  
  }
  if (obj === true) {
    return 'true';
  }
  if (obj === false) {
    return 'false';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'number') {
    return obj.toString();
  }
  if (obj === undefined) {
    return '';
  }
  if (typeof obj === 'function') {
    // console.log('condition passed')
    return '';
  }

  // if (obj === []) {
  //  return '[]';
  // }
  // if (obj === {}) {
  //  return '{}';
  // }
  if (Array.isArray(obj)) {
    return '[' + obj.map(stringifyJSON) + ']';
  }
  if (typeof obj === 'object') {
  // check object length
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    for (let key in obj) {
      count++;
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        if (Object.keys(obj).length !== count) {
           stringifiedObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        } else if (Object.keys(obj).length === count) {
          stringifiedObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        }
        
      }
      
      
    // if not on last key value pair 
      // return stringified object with comma
    // else 
      // return stringified object without comma
    }
    return '{' + stringifiedObj + '}';
  }
};
