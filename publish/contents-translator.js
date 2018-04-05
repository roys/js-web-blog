console.log('window.SpaBlog=window.SpaBlog||{};(function(SpaBlog){SpaBlog.posts=');
console.log(JSON.stringify(require('./contents.js'), null, 4));
console.log(';}(window.SpaBlog));');
