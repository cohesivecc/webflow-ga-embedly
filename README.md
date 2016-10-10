## Webflow + Embedly + Google Analytics

[Webflow](https://webflow.com) uses [Embedly](http://embed.ly/) as for embedding videos. Embedly's [platform.js](http://docs.embed.ly/v1.0/docs/platformjs) has built-in [analytics integration](http://docs.embed.ly/docs/integrations), however Webflow still uses the old Google Analytics code (```window._gaq```).

This script connects these dots by initializing the Embedly platform code, creating a custom tracking event for the older version of Google Analytics, and wrapping it inside [Webflow's event queue](https://forum.webflow.com/t/webflow-js-and-jquery-plugins/907).

### Usage

Simply upload ```webflow.embedly.ga.js``` to your server, and include it via script tag in the Custom Code section of your site in Webflow:

```<script src="/webflow.embedly.ga.js" type="text/javascript"></script>```
