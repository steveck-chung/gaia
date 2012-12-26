'use stricts';

/**

 */

var IMSITest = {
  init: function imsi_init() {
    $("imsi").innerHTML = '';
  }
};

window.addEventListener('load', IMSITest.init.bind(IMSITest));
//window.addEventListener('unload', BatteryTest.uninit.bind(BatteryTest));
