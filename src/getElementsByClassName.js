// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// You should use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className, node = document.body) {
  // your code here
  var results = [];
  if (node.classList !== undefined) {
    if ([].indexOf.call(node.classList, className) !== -1) {
      results.push(node);
    }
  }
  
  if (node.hasChildNodes()) {
    for (var elem of node.childNodes) {
      results = results.concat(getElementsByClassName(className, elem));
    }
  }
  return results;
};
