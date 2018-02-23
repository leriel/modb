const page = require('webpage').create();
const url = 'dist/index.html';
page.clearMemoryCache();

page.onConsoleMessage = function(msg) {
  console.log('site console: ' + msg);
};
page.onResourceError = function(resourceError) {
  console.log('Unable to load resource (#' + resourceError.id + 'URL:' + resourceError.url + ')');
  console.log('Error code: ' + resourceError.errorCode + '. Description: ' + resourceError.errorString);
};
page.onerror = phantom.onerror = function(msg, trace) {

  var msgStack = ['ERROR: ' + msg];

  if (trace && trace.length) {
    msgStack.push('TRACE:');
    trace.forEach(function(t) {
      console.log('error');
      msgStack.push(
        ' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function + '")' : '')
      );
    });
  }

  console.log(msgStack.join('\n'));
  return true;
};
page.onUrlChanged = function(targetUrl) {
  console.log('New URL: ' + targetUrl);
};

// page.evaluate(function () {
//   console.log('I am a log inside page');
//   console.error('I am an error inside page');
// });
// phantom.exit();
page.open(url, function(status) {
  console.log(status);
  page.evaluate(function() {
    window.onerror = function() {
      console.log('whaaat');
    }
    a += 1;
    console.log('whaaat 1');
    // window.location.hash = '/items';
    // window.location.hash = '/items/1068/craft';
    // window.location.hash = '/items/383/craft';
  });
  setInterval(function() {
    // console.log('content', page.content);
    phantom.exit();
  }, 5000);
  // console.log('url', page.url);
});
