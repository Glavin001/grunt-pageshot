/* global pageshot */
console.log('Pageshot ready!');

var d = 1;
setInterval(function() {
  //var d = (new Date());
  var name = 'screenshot'+d;
  d++;
  var allFormats = ['png','gif','jpeg','pdf'];
  //var format = allFormats[Math.floor(Math.random() * allFormats.length)];
  var format = 'png';
  pageshot.shoot(name, format);
}, 1000);

setTimeout(function() {

  pageshot.shoot('quitting').then(function() {
    console.log('Success!');
    pageshot.quit();
  }, function() {
    console.log('Fail');
    pageshot.quit();
  });

}, 5100);
