'use stricts';

/**
 * Display IMEI code
 */

var IMEITest = {
  init: function imei_init() {
    var req = mozMobileConnection.sendMMI('*#06#');
    req.onsuccess = function onsuccess(evt) {
      $('imei').textContent = evt.target.result;
    }
    req.onerror = function onerror() {
      $('imei').textContent = dumpErrorLog('IMEI');
    }
  }
};

window.addEventListener('load', IMEITest.init.bind(IMEITest));
//window.addEventListener('unload', BatteryTest.uninit.bind(BatteryTest));
