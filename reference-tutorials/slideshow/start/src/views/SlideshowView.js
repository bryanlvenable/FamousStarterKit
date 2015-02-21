/*** SlideshowView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    // Add Lightbox widget
    var Lightbox = require('famous/views/Lightbox');
    var SlideView = require('views/SlideView');
    var Easing = require('famous/transitions/Easing');

    // Constructor function for our SlideshowView class
    function SlideshowView() {

        // Applies View's constructor function to SlideshowView class
        View.apply(this, arguments);

        // var slideView = new SlideView();

        // this.add(slideView);

        // Add root modifier to specify size of view
        this.rootModifier = new StateModifier({
            size: this.options.size,
            origin: [0.5, 0],
            align: [0.5, 0]
        });

        this.mainNode = this.add(this.rootModifier);

        _createLightbox.call(this);
        _createSlides.call(this);
    }

    // Establishes prototype chain for SlideshowView class to inherit from View
    SlideshowView.prototype = Object.create(View.prototype);
    SlideshowView.prototype.constructor = SlideshowView;
    
    // Method to show current slide
    SlideshowView.prototype.showCurrentSlide = function() {
        var slide = this.slides[this.currentIndex];
        this.lightbox.show(slide);
    };

    SlideshowView.prototype.showNextSlide = function() {
        this.currentIndex++;
        if (this.currentIndex === this.slides.length) this.currentIndex = 0;
        this.showCurrentSlide();
    };

    // Default options for SlideshowView class
    SlideshowView.DEFAULT_OPTIONS = {
        size: [450, 500],
        data: undefined,
        lightboxOpts: {
            inTransform: Transform.translate(300, 0, 0),
            outTransform: Transform.translate(-500, 0, 0),
            inTransition: { duration: 500, curve: Easing.outBack },
            outTransition: { duration: 350, curve: Easing.inQuad }
        }
    };

    // Define your helper functions and prototype methods here
    // Lightbox instance helper function
    function _createLightbox() {
        this.lightbox = new Lightbox(this.options.lightboxOpts);
        this.mainNode.add(this.lightbox);
    }

    // Slide creation helper function
    function _createSlides() {
        this.slides = [];
        this.currentIndex = 0;

        for (var i = 0; i < this.options.data.length; i++) {
            var slide = new SlideView({
                size: this.options.size,
                photoUrl: this.options.data[i]
            });

            this.slides.push(slide);

            // Add clidk event listener
            slide.on('click', this.showNextSlide.bind(this));
        }
        // Call helper function to create slides
        this.showCurrentSlide();
    }

    module.exports = SlideshowView;
});
