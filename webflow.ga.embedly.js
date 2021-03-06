/*
 * Webflow Embedly GA: Adds Google Analytics event tracking to a Webflow site for Embedly embedded videos (Webflow's default)
 * @license MIT
 * @author Neal White - http://www.cohesive.cc
 *
 * https://github.com/cohesivecc/webflow-ga-embedly
*/
var Webflow = Webflow || [];
Webflow.push(function () {
  (function(w, d){
    var id='embedly-platform', n = 'script';
    if (!d.getElementById(id)) {
      w.embedly = w.embedly || function() {(w.embedly.q = w.embedly.q || []).push(arguments);};
      var e = d.createElement(n); e.id = id; e.async=1;
      e.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://cdn.embedly.com/widgets/platform.js';
      var s = d.getElementsByTagName(n)[0];
      s.parentNode.insertBefore(e, s);
    }

    if(w.gtag) {
      // new Google Analytics gtag.js used by Webflow
      var embedlyGAQ = function(type, action, value) {
        window.gtag('event', action, {
          'event_category': 'Embedly > '+type,
          'event_label': value,
        });
      };
      w.embedly("defaults", {
        integrations: [embedlyGAQ]
      });
    } else if(w._gaq) {
      // older Google Analytics used by Webflow
      var embedlyGAQ = function(type, action, value) {
        window._gaq.push(['_trackEvent', 'Embedly > '+type, action, value, undefined]);
      };
      w.embedly("defaults", {
        integrations: [embedlyGAQ]
      });
    }
  })(window, document);
});
