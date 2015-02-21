/*** SlideshowView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    var SlideView = require('views/SlideView');

    // Constructor function for our SlideshowView class
    function SlideshowView() {

        // Applies View's constructor function to SlideshowView class
        View.apply(this, arguments);

        var slideView = new SlideView();

        this.add(slideView);
    }

    // Establishes prototype chain for SlideshowView class to inherit from View
    SlideshowView.prototype = Object.create(View.prototype);
    SlideshowView.prototype.constructor = SlideshowView;

    // Default options for SlideshowView class
    SlideshowView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here

    module.exports = SlideshowView;
});
