/*** AppView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    // import the SlideshowView class
    var SlideshowView = require('views/SlideshowView');

    var ImageSurface = require('famous/surfaces/ImageSurface');

    // Constructor function for our AppView class
    function AppView() {

        // Applies View's constructor function to AppView class
        View.apply(this, arguments);

        // // create a new instance of slideshow view
        // var slideshowView = new SlideshowView();

        // // passing in data
        // var slideshowView = new SlideshowView({
        //     data: this.options.data
        // });

        // // add the instance to app view
        // this.add(slideshowView);

        _createCamera.call(this);
        _createSlideshow.call(this);
    }

    // Establishes prototype chain for AppView class to inherit from View
    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    // Default options for AppView class
    AppView.DEFAULT_OPTIONS = {
        data: undefined,
        cameraWidth: 0.5 * window.innerHeight
    };

    AppView.DEFAULT_OPTIONS.slideWidth = 0.8 * AppView.DEFAULT_OPTIONS.cameraWidth;
        AppView.DEFAULT_OPTIONS.slideHeight = AppView.DEFAULT_OPTIONS.slideWidth + 40;
        AppView.DEFAULT_OPTIONS.slidePosition = 0.77 * AppView.DEFAULT_OPTIONS.cameraWidth;

    // Define your helper functions and prototype methods here
    function _createCamera() {
        var camera = new ImageSurface({
            size: [this.options.cameraWidth, true],
            content: 'img/camera.png',
            properties: {
                width: '100%'
            }
        });

        var cameraModifier = new StateModifier({
            origin: [0.5, 0],
            align: [0.5, 0],
            transform: Transform.behind
        });

        this.add(cameraModifier).add(camera);
    }

    function _createSlideshow() {
        var slideshowView = new SlideshowView({
            size: [this.options.slideWidth, this.options.slideHeight],
            data: this.options.data
        });

        var slideshowModifier = new StateModifier({
            origin: [0.5, 0],
            align: [0.5, 0],
            transform: Transform.translate(0, this.options.slidePosition, 0)
        });

        this.add(slideshowModifier).add(slideshowView);
    }

    module.exports = AppView;
});
