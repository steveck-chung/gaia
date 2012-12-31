'use stricts';

/**

 */

var IMSITest = {
  init: function imsi_init() {
    $('imsi').textContent = '';
  }
};

window.addEventListener('load', IMSITest.init.bind(IMSITest));
//window.addEventListener('unload', BatteryTest.uninit.bind(BatteryTest));
