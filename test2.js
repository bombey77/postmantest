var fs = require('fs');

fs.open('mynewfile.csv', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

var content2 = fs.readFileSync("environment4.json");
var json2 = JSON.parse(content2);
var array = json2.values[9].value;
var array2 = array.split(",");

array2.forEach(function(element) {
fs.appendFile('mynewfile.csv', element + '\n', function (err) {
  if (err) throw err;
    console.log('Add ' + element +".");
});
});




