'use stricts';

/**

 */

var BatteryTest = {
  init: function ct_init() {
    $("status").innerHTML = battery.charging;
    $("level").innerHTML = battery.level;
  },
  uninit: function ct_uninit() {
  }
};

window.addEventListener('load', BatteryTest.init.bind(BatteryTest));
window.addEventListener('unload', BatteryTest.uninit.bind(BatteryTest));
