'use stricts';

/**
 * Display wifi MAC address
 */

var WifiTest = {
  init: function wt_init() {
    var request = settings.createLock().get('deviceinfo.mac');
    request.onsuccess = function(e) {
      $('wifi_mac').textContent = request.result['deviceinfo.mac'];
    };
    request.onerror = function(e) {
      $('wifi_mac').textContent = dumpErrorLog('deviceinfo.mac');
    };
  },
  uninit: function wt_uninit() {
  }
};

window.addEventListener('load', WifiTest.init.bind(WifiTest));
window.addEventListener('unload', WifiTest.uninit.bind(WifiTest));
