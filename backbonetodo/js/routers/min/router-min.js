define(["jquery","backbone","collections/todos","common"],function($,e,t,r){"use strict";var o=e.Router.extend({routes:{"*filter":"setFilter"},setFilter:function(e){r.TodoFilter=e||"",t.trigger("filter")}});return o});