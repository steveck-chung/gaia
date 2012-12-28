'use stricts';

/**
 * Battery detail information
 */

var BatteryTest = {
  init: function ct_init() {
    $("status").textContent = battery.charging;
    $("level").textContent = parseFloat(battery.level) * 100;
    $("scale").textContent = '100';
  },
  uninit: function ct_uninit() {
  }
};

window.addEventListener('load', BatteryTest.init.bind(BatteryTest));
window.addEventListener('unload', BatteryTest.uninit.bind(BatteryTest));
