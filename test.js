var fs = require('fs');
var csv = require('fast-csv');

var content2 = fs.readFileSync("environment4.json");
var json2 = JSON.parse(content2);
var array = json2.values[9].value;
var array2 = array.split(",");

var csvStream = csv.createWriteStream({headers: true}),
    writableStream = fs.createWriteStream("my5.csv");

writableStream.on("finish", function(){
  console.log("DONE!");
});

csvStream.pipe(writableStream);
array2.forEach(function(element) {
csvStream.write({Cities: element});
});
csvStream.end();



