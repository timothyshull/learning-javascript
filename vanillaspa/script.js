/*jslint browser: true*/
/*global alert */

window.addEventListener('load',  function () {
    "use strict";
    function newTodoKeyPressHandler(event) {
        var elem = document.activeElement,
            idOfElem = elem.getAttribute('id');

        if (event.keyCode === 13) {
            alert("We have a new Todo! Todo: " + elem.value);
            event.preventDefault();
        }
    }
    document.getElementById('todo1').addEventListener('keypress', newTodoKeyPressHandler, false);
});


