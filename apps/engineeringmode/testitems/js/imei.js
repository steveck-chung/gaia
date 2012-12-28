'use stricts';

/**
 * Display IMEI code
 */

var IMEITest = {
  init: function imei_init() {
    var req = mozMobileConnection.sendMMI('*#06#');
    req.onsuccess = function onsuccess(evt) {
      $("imei").innerHTML = evt.target.result;
    }
    req.onerror = function onerror() {
      $("imei").innerHTML = 'N/A';
    }
  }
};

window.addEventListener('load', IMEITest.init.bind(IMEITest));
//window.addEventListener('unload', BatteryTest.uninit.bind(BatteryTest));
