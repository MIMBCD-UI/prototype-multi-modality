var server = require('../src/server/index.js');
var requests = require("../src/server/utils/requests");

var getConfigFileValue = requests.getConfigFileValue();
var getPortValue = requests.getPortValue();

// console.log("Testing Get Port Value Request:\n", getPortValue);
// console.log("Testing Get Config File Value Request:\n", getConfigFileValue);

if(getConfigFileValue === 'multi') {
  test('Port Value', () => {
    expect(getPortValue).toBe('8486');
  });
} else {
  console.log("ERROR: wrong environemnt");
}
