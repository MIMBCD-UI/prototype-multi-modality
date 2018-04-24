var path = require('path');
var webpack = require('webpack');

var requests = require('./src/server/utils/requests');

var hostnameValue = requests.getHostnameValue();
var portNumber = Number(requests.getPortValue());

console.log("Webpack Hostname Value:\n", hostnameValue);
console.log("Webpack Port Number:\n", portNumber);

var serverConfig = {
  entry: ["./src/server/index.js"],
  target:'node',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename : 'server.bundle.js'
  },
  watch: true
};

var clientConfig = {
  entry: ["./src/client/index.js"],
  target:'web',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename : 'client.bundle.js'
  },
  watch: true,
  node:{
    'fs':'empty'
  },
  devServer: {
    host: hostnameValue,
    port: portNumber
  }
};

module.exports = [clientConfig, serverConfig]
