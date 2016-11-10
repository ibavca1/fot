require('babel-register')({presets: ['es2016']});
require('babel-polyfill');

var app = require('./server').default;
var PORT = 3000;
app.listen(PORT, function(){
  console.log("App start on localhost:" + PORT);
});
