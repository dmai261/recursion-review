// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var eval = function(value) {
    console.log(value);
    value = value.trim();
    if (value === 'true') {
      value = true;
    } else if (value === 'false') {
      value = false;
    } else if (value === 'null') {
      value = null;
    } else if (value.search(/\d/g) >= 0 && !isNaN(Number(value))) {
      value = Number(value);
    } else if (typeof value === 'string') {
      value = value.replace(/['"]+/g, '');
    }
    return value;
  };
  
  
  //turn into array function
  if (json[0] === '[') {
    var result = [];
    if(json.length > 2) {
      json = json.slice(1, -1).split(',');
      json.forEach(function(element) {
        result.push(eval(element));
      });
    }
    return result;
  }
  
  //turn into object function
  else if (json[0] === '{') {
    var result = {};
    if(json.length > 2) {
      var pairs = json.slice(1, -1).split(/:|,(?=[^"]"[^"]*")/g);
      console.log('pairs', pairs)
      for (var i = 0; i < pairs.length; i+=2) {
        result[eval(pairs[i])] = eval(pairs[i+1]);
      }
    }
    return result;
  }
};
    
// object - {}, { members }
// members - pair
// pair - string: value
// array - [], [ elements ]
// elements - value
// value - string, number, object, array, bool, null