/*global QUnit*/

sap.ui.define([
	"ns/trialmodule/controller/trialview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("trialview Controller");

	QUnit.test("I should test the trialview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
