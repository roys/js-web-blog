console.log('window.SpaBlog=window.SpaBlog||{};(function(SpaBlog){');
var arr = require('./contents.js');
console.log('SpaBlog.pages=' + JSON.stringify(arr[0], null, 4) + ',');
console.log('SpaBlog.posts=' + JSON.stringify(arr[1], null, 4));
console.log('}(window.SpaBlog));');
