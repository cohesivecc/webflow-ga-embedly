## Webflow + Google Analytics 4 + Embedly

[Webflow](https://webflow.com) uses [Embedly](https://embed.ly/) as for embedding videos. Embedly's [platform.js](https://docs.embed.ly/reference/platformjs) has built-in [analytics integration](https://docs.embed.ly/reference/integrations), however we want to leverage the new Google Analytics 4 [Enhanced Measurements](https://support.google.com/analytics/answer/9216061?hl=en) video engagement events.

This script connects these dots by initializing the Embedly platform code and mapping Embedly's analytics events to their respective Google Analytics video engagement events. See also [Webflow's event queue](https://discourse.webflow.com/t/webflow-js-and-jquery-plugins/907).

### Usage
This script will only affect videos embedded via Webflow's built-in video component. If you want to track video event for videos directly embedded via an HTML Embed component, or a Custom Element component, you'll need to look into other solutions.

#### Self-hosted
Simply upload ```webflow.ga.embedly.js``` to your server, and include it via script tag in the Custom Code section of your site in Webflow:

```<script src="/webflow.ga.embedly.js" type="text/javascript"></script>```

#### CDN

```<script src="https://cdn.jsdelivr.net/gh/cohesivecc/webflow-ga-embedly@1.2.0/webflow.ga.embedly.js" type="text/javascript"></script>```

### License
This library is licensed under the [MIT License](https://opensource.org/license/MIT).
