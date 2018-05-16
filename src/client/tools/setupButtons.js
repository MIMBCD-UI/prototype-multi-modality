// File Management
var fileFormat = '.json';
var pathToSave = '../../dataset/';

// Time Stamp
var currentDate = new Date();
var year = currentDate.getFullYear();
var yearString = year.toString();
var month = currentDate.getMonth() + 1; //Be careful! January is 0 not 1
var monthString = (month < 9 ? '0' : '') + (month);
var date = currentDate.getDate();
var dateString = (date < 9 ? '0' : '') + (date);
var hours = currentDate.getHours();
var hoursString = (hours < 9 ? '0' : '') + (hours);
var minutes = currentDate.getMinutes();
var minutesString = (minutes < 9 ? '0' : '') + (minutes);
var seconds = currentDate.getSeconds();
var secondsString = (seconds < 9 ? '0' : '') + (seconds);
var totalDate = yearString + monthString + dateString;
var totalTime = hoursString + minutesString + secondsString;
var timeStamp = totalDate + totalTime;
var currentElement;

// var http = require('http');

// var server = http.createServer(function(req, res) {
//   res.writeHead(200);
//   res.end('Hello Http');
// });
// server.listen(8080);

const setupButtons = (studyViewer) => {
  // Get the button elements
  var buttons = $(studyViewer).find('button');

  // Tool button event handlers that set the new active tool

  // WW/WL
  $(buttons[0]).on('click touchstart', function() {
    disableAllTools();
    forEachViewport(function(element) {
      cornerstoneTools.wwwc.activate(element, 1);
      cornerstoneTools.wwwcTouchDrag.activate(element);
    });
  });

  // Invert
  $(buttons[1]).on('click touchstart', function() {
    disableAllTools();
    forEachViewport(function(element) {
      var viewport = cornerstone.getViewport(element);
      // Toggle invert
      if (viewport.invert === true) {
        viewport.invert = false;
      } else {
        viewport.invert = true;
      }
      cornerstone.setViewport(element, viewport);
    });
  });

  // Zoom
  $(buttons[2]).on('click touchstart', function() {
    disableAllTools();
    forEachViewport(function(element) {
      // 5 is right mouse button and left mouse button
      cornerstoneTools.zoom.activate(element, 5);
      cornerstoneTools.zoomTouchDrag.activate(element);
    });
  });

  // Pan
  $(buttons[3]).on('click touchstart', function() {
    disableAllTools();
    forEachViewport(function(element) {
      // 3 is middle mouse button and left mouse button
      cornerstoneTools.pan.activate(element, 3);
      cornerstoneTools.panTouchDrag.activate(element);
    });
  });

  // Stack scroll
  $(buttons[4]).on('click touchstart', function() {
    disableAllTools();
    forEachViewport(function(element) {
      cornerstoneTools.stackScroll.activate(element, 1);
      cornerstoneTools.stackScrollTouchDrag.activate(element);
    });
  });

  // Tooltips
  $(buttons[0]).tooltip();
  $(buttons[1]).tooltip();
  $(buttons[2]).tooltip();
  $(buttons[3]).tooltip();
  $(buttons[4]).tooltip();
  $(buttons[7]).tooltip();

  const download = (data, name, type) => {
    var link = document.createElement("a");
    var data = JSON.stringify(data, null, 4);
    var blob = new Blob([data], {
      type: 'application/octet-stream'
    });
    var url = URL.createObjectURL(blob, {
      type: type
    });

    link.setAttribute('href', url);
    link.setAttribute('download', name);

    var event = document.createEvent('MouseEvents');
    event.initMouseEvent(
      'click',
      true,
      true,
      window,
      1,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
    link.dispatchEvent(event);
  }
};

$(document).keyup(function(e) {
  if (e.keyCode == 27 && currentElement !== undefined) { // escape key maps to keycode `27`
  var toolStateManager = cornerstoneTools.getElementToolStateManager(currentElement);
  var freehandToolState = toolStateManager.get(currentElement, 'freehand');
  if(freehandToolState){
    freehandToolState.data[freehandToolState.data.length-1].handles.pop();
    // for(var i=0; i<freehandToolState.data.length; i++){

    // }
    cornerstoneTools.freehand.getConfiguration().currentHandle--;

    cornerstone.updateImage(currentElement);
  }

 }
});
