/*
 * Webflow Embedly GA: Adds Google Analytics event tracking to a Webflow site for Embedly embedded videos (Webflow's default)
 * @license MIT
 * @author Neal White - https://www.cohesive.cc
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
      var embedlyGAQ = function(type, action, value) {
        // convert to standardized GA4 video engagement events
        if(type == 'Video') {
          if(action == 'Play') {
            window.gtag('event', 'video_start', {
              'video_url': value,
            });
          } else if(action.match(/\d+% Watched/)) {
            var pct = action.replace(/[^\d]/g, ''); // extract numeric percent
            if(pct == '100') {
              window.gtag('event', 'video_complete', {
                'video_url': value,
              });
            } else {
              window.gtag('event', 'video_progress', {
                'video_url': value,
                'video_percent': pct
              })
            }
          }
        }
      };
      w.embedly("defaults", {
        integrations: [embedlyGAQ]
      });
    }
  })(window, document);
});