/* ================================================== */
/** IMPORT Node Modules                               */
/* ================================================== */

var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

/* ================================================== */


/* ================================================== */
/** IMPORT Utils                                      */
/* ================================================== */

var requests = require("./utils/requests");

/* ================================================== */


/* ================================================== */
/** Base Configuration Variables                      */
/* ================================================== */

// var configFilePrefix = '../../';
var configFilePrefix = '';
var configFileName = 'config';
var configFileSuffix = '/';
var configFileSet = configFileName + configFileSuffix;
var configFileDir = configFilePrefix + configFileSet;
var fileExtension = '.json';
var requestValue = 'GET';
var studyListPath = 'src/common/studyList.json';
var seriesPath = 'src/common/studies/';

/* ================================================== */


/* ================================================== */
/** Dataset File Path Manager                         */
/* ================================================== */

var configFileValue = requests.getConfigFileValue();

var datasetFilePath = 'dataset/';

/* ================================================== */


/* ================================================== */
/**
 *
 * Load JSON configuration data from the sercer using
 * GET HTTP request
 *
 */
/* ================================================== */

var portValue = requests.getPortValue();

/* ================================================== */
/* ================================================== */
/* ================================================== */


/* ================================================== */
/**
 *
 * CORS Configuration
 *
 */
/* ================================================== */



/* ================================================== */
/* ================================================== */
/* ================================================== */


var saveFileHandler = function(path, data) {
  var fileData = JSON.parse(data);
  fs.writeFile(datasetFilePath + path, JSON.stringify(fileData, null, 4), function(err) {
    if (err) {
      console.log('Error in saving file :' + err);
    } else {
      console.log('file saved!');
    }
  });
};

var updateStudiesHandler = function(patientData) {
  var studyList = JSON.parse(patientData)
  fs.writeFile(studyListPath, JSON.stringify(studyList, null, 4), function(err) {
    if (err) {
      console.log('Error in saving file ');
    }else{
    console.log('file studyList.json updated successfully saved!');
    }
  });
};

var updateStudiesFileHandler = function(fileData) {
  var objectData = JSON.parse(fileData);
  console.log(objectData.file.length);
  for (var i = 0; i < objectData.file.length; i++) {

    fs.writeFile(seriesPath + objectData.file[i].fileName + '.json', JSON.stringify(objectData.file[i].fileData, null, 4), function(err) {
      if (err) {
        console.log('Error in saving file:\n' + err);
      }
      console.log('patients file created successfully:');
    });
  }
};

http.createServer(function(request, response) {

  if (request.url == 'SaveFile' || request.url == '/SaveFile' || request.url == './SaveFile') {
    var store = '';
    request.on('data', function(chunk) {
      store += chunk;
    });

    request.on('end', function() {
      var objectData = JSON.parse(store);
      saveFileHandler(objectData.path, store);
    });
  };

  if (request.url == 'UpdatePatients' || request.url == '/UpdatePatients' || request.url == './UpdatePatients') {
    console.log('update patients');
    var patientData = '';
    request.on('data', function(chunk) {
      patientData += chunk;
    });

    request.on('end', function() {
      //console.log(patientData);
      response.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      response.end('success');
      updateStudiesHandler(patientData);
    });
  };

  if (request.url == 'UpdatePatientFile' || request.url == '/UpdatePatientFile' || request.url == './UpdatePatientFile') {
    console.log('update patients files in studies/<file>');
    var fileData = '';
    request.on('data', function(chunk) {
      fileData += chunk;
    });

    request.on('end', function() {
      //console.log(fileData);
      response.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      response.end('success');
      updateStudiesFileHandler(fileData);
    });
  };

  var filePath = '.' + request.url;
  if (filePath == './') {
    filePath = '../public/index.html';
  }

  var extname = path.extname(filePath);
  var contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.wav':
      contentType = 'audio/wav';
      break;
  }

  fs.readFile(filePath, function(error, content) {
    if (error) {
      if (error.code == 'ENOENT') {
        fs.readFile('../public/404.html', function(error, content) {
          response.writeHead(200, {
            'Content-Type': contentType
          });
          response.end(content, 'utf-8');
        });
      } else {
        response.writeHead(500);
        response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
        response.end();
      }
    } else {
      response.writeHead(200, {
        'Content-Type': contentType
      });
      response.end(content, 'utf-8');
    }
  });

}).listen(portValue);
