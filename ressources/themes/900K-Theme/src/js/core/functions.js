module.exports = function() {

  f = {
    listener_delete:
      function ($el, event, cb) {
        $el.addEventListener(event, function callback (e) {
          cb.call($el, e)
          this.removeEventListener(event, callback)
        })

        // This function is used to add the event listener and remove it afterwards
        // to not have stacing listeners that gets triggered x time each time

        // Exemple :
        // f.listener_delete($element, 'event', function () {
        //   ... your code here
        // })
      },
    once :
      function (fn, context) {
      	var executed;
      	return function() {
          if (!executed) {
            executed = true;
            if(fn) {
              result = fn.apply(context || this, arguments);
              fn = null;
            }
          }
      		return result;
      	};

        // Run once a function ( Use as a wraper )
        // Usage
        // f.once(function() {
        // 	console.log('Executed!');
        // });

        // run_once(); // "Executed!"
        // run_once(); // nothing
      },
    params :
      function (qs) {
      qs = qs.split('+').join(' ');

      var params = {},
          tokens,
          re = /[?&]?([^=]+)=([^&]*)/g;

      while (tokens = re.exec(qs)) {
          params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
      }

      return params;

      // Get the URL params
      // var url_params = f.params(location.search);
    },
    get_header_height :
      function () {
        var executed;
        var mainmenu    = document.querySelector('.main-menu'); // Fill your header
        var wraper      = document.querySelector('.wraper');
        var wpadminbar  = document.querySelector('#wpadminbar');

        var h_heights  = mainmenu.offsetHeight;
        if (!executed) {
          wraper.style.paddingTop = h_heights + "px";
        }
        return h_heights
      }

  }
}
