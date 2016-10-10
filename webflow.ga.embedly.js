/*
 * Webflow Embedly GA: Adds Google Analytics event tracking to a Webflow site for Embedly embedded videos (Webflow's default)
 * @license MIT
 * @author Neal White - http://www.cohesive.cc
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

    if(w._gaq) {
      // older Google Analytics used by Webflow
      var embedlyGAQ = function(type, action, value){
        _gaq.push(['_trackEvent', 'Embedly > '+type, action, value, undefined]);
      };
      w.embedly("defaults", {
        integrations: [embedlyGAQ]
      });
    }
  })(window, document);
});
