var repeatString = function() {
  var rString = 'hey';
for (var i =0; i<3; i++){
  rString += rString;
}
return rString;
}

module.exports = repeatString
