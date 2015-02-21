/*** main.js ***/

define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');

    // Import Utility
    var Utility = require('famous/utilities/Utility');
    
    // import the AppView class using require
    var AppView = require('views/AppView');

    var mainContext = Engine.createContext();

    mainContext.setPerspective(1000);
    
    // Import SlideData
    var SlideData = require('data/SlideData');
    
    // Simple GET request to the Picasa api with callback
    Utility.loadURL(SlideData.getUrl(), initApp);

    function initApp(data) {
      // parses out response data and retrieves array of urls
      data = SlideData.parse(data);

      // Instantiates AppView with our url data
      var appView = new AppView({ data : data });

      mainContext.add(appView);
    }

  // // create a new instance of app view
  //   var appView = new AppView();

  // // add the instance to the context
  //   mainContext.add(appView);
});