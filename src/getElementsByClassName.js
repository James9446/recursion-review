// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  // You should use document.body, element.childNodes, and element.classList
  var theClassList = []
  
  var getMatchElements = function(node) {


    if(node.classList && node.classList.value.indexOf(className) !== -1) {
      theClassList.push(node)
    } 
    if(!node.childNodes) {
    return 
    }

    node.childNodes.forEach(getMatchElements)
    
    
  }
  getMatchElements(document.body)
  return theClassList

};
