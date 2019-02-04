var fs = require('fs');

fs.open('mynewfile.csv', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

var environment = fs.readFileSync("environment4.json");
var parsedEnvironment = JSON.parse(environment);
var envValue = parsedEnvironment.values[9].value;
var subEnvValue = envValue.substring(1, envValue.length-1);
var splitEnvValue = subEnvValue.split(",");

splitEnvValue.forEach(function(element) {
    fs.appendFileSync('mynewfile.csv', element + '\n', function (err) {
        if (err) throw err;
    });
});




