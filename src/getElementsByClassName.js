// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var elements = [];
  var find = function(element) {
    if (element.classList && element.classList.contains(className)) {
      elements.push(element);
    }
    element.childNodes.forEach((child) => find(child));
  };
  find(document.body);
  return elements;
};
