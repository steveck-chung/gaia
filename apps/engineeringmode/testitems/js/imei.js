'use stricts';

/**

 */

var IMEITest = {
  init: function imei_init() {
    $("imei").innerHTML = '';
  }
};

window.addEventListener('load', IMEITest.init.bind(IMEITest));
//window.addEventListener('unload', BatteryTest.uninit.bind(BatteryTest));
