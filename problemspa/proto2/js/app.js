/*global app, $on */
(function () {
	'use strict';

	/**
	 * Sets up a brand new Todo list.
	 *
	 * @param {string} name The name of your new to do list.
	 */
	function ProblemSPA(name) {
		this.storage = new app.Store(name + 'main-problem');
    this.storage = new app.Store(name);
		this.model = new app.Model(this.storage);
		this.template = new app.Template();
		this.view = new app.View(this.template);
		this.controller = new app.Controller(this.model, this.view);
	}

	var problemSPA = new ProblemSPA('problem-spa');

	function setView() {
		problemSPA.controller.setView(document.location.hash);
	}
	$on(window, 'load', setView);
	$on(window, 'hashchange', setView);
})();
