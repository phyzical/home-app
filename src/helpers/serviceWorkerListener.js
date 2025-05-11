self.addEventListener('message', (e) => {
    if (!e.data) {
        return;
    }

    switch (e.data) {
    case 'skipWaiting':
        self.skipWaiting();
        break;
    default:
        break;
    }
});

// todo fix workbox to fix cache things
// workbox.clientsClaim();
//
// // The precaching code provided by Workbox.
// self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.suppressWarnings();
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
