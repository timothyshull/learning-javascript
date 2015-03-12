/*jslint browser: true*/
/*global $ */
/*global Handlebars */

$(function () {
    "use strict";
    var shoesData = [{name: "Nike", price: 199.00 }, {name: "Loafers", price: 59.00 }, {name: "Wing Tip", price: 259.00 }],
        theTemplateScript = $("#shoe-template").html(),
        theTemplate = Handlebars.compile(theTemplateScript);
    $(".shoesNav").append(theTemplate(shoesData));
});