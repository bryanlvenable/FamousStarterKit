/*** SlideView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    // Constructor function for our SlideView class
    function SlideView() {

        // Applies View's constructor function to SlideView class
        View.apply(this, arguments);

        this.rootModifier = new StateModifier({
            size: [400, 450]
        });

        // saving a reference to the new node
        this.mainNode = this.add(this.rootModifier);

        var background = new Surface({
            // undefined size will inherit size from parent modifier
            properties: {
                backgroundColor: '#FFFFF5',
                boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)'
            }
        });

        this.mainNode.add(background);
    }

    // Establishes prototype chain for SlideView class to inherit from View
    SlideView.prototype = Object.create(View.prototype);
    SlideView.prototype.constructor = SlideView;

    // Default options for SlideView class
    SlideView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here

    module.exports = SlideView;
});
