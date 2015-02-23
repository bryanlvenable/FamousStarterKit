/*** StripView.js ***/

define(function(require, exports, module) {
    var View          = require('famous/core/View');
    var Surface       = require('famous/core/Surface');
    var Transform     = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    function StripView() {
        View.apply(this, arguments);

        _createBackground.call(this);
    }

    StripView.prototype = Object.create(View.prototype);
    StripView.prototype.constructor = StripView;

    StripView.DEFAULT_OPTIONS = {
        width: 320,
        height: 55
    };

    function _createBackground() {
        var backgroundSurface = new Surface({
            size: [this.options.width, this.options.height],
            properties: {
                backgroundColor: 'black'
            }
        });

        this.add(backgroundSurface);
    }

    module.exports = StripView;
});
