window.addEventListener("load", function () {
  var $body = $(document.body);
  // var childList = $($body.children());
  console.log($body);

  // function childrenReplace(object) {
  //   var objectSub = object;
  //   for (var i = 0; i<objectSub.length; i++){
  //     var childElem = $(objectSub[i]);
  //     if (childElem.children() !== undefined) {
  //       objectSub[i] = childElem.children();
  //     }
  //   }
  //   return objectSub;
  // }
  //
  // childList = childrenReplace(childList);
  //
  // window.childList = childList;
}, false);

// function childrenReplace(object) {
// var objectSub = object;
// for (var i = 0; i<objectSub.length; i++){
// var childElem = $(objectSub[i]);
// if (childElem.children() !== undefined) {
// objectSub[i] = childElem.children();
// }
// }
// return objectSub;
// }