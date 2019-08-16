
importScripts("/dist/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/dist/workbox-v4.3.1"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  "directoryIndex": "/dist/"
});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/dist/index.html"));
