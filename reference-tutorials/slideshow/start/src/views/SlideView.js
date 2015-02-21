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
            size: this.options.size
        });

        // saving a reference to the new node
        this.mainNode = this.add(this.rootModifier);
        
        // Call helper function for background
        _createBackground.call(this);
        _createFilm.call(this);

    }

    // Establishes prototype chain for SlideView class to inherit from View
    SlideView.prototype = Object.create(View.prototype);
    SlideView.prototype.constructor = SlideView;

    // Default options for SlideView class
    SlideView.DEFAULT_OPTIONS = {
        size: [400, 450],
        filmBorder: 15
    };

    // Define your helper functions and prototype methods here
    
    // Background helper function
    function _createBackground() {
        var background = new Surface({
            // undefined size will inherit size from parent modifier
            properties: {
                backgroundColor: '#FFFFF5',
                boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)'
            }
        });

        this.mainNode.add(background);
    }

    // Film creation helper function
    function _createFilm() {
            this.options.filmSize = this.options.size[0] - 2 * this.options.filmBorder;

            var film = new Surface({
                size: [this.options.filmSize, this.options.filmSize],
                properties: {
                    backgroundColor: '#222',
                    zIndex: 1
                }
            });

            var filmModifier = new StateModifier({
                origin: [0.5, 0],
                align: [0.5, 0],
                transform: Transform.translate(0, this.options.filmBorder, 1)
            });

            this.mainNode.add(filmModifier).add(film);
        }

    module.exports = SlideView;
});
