'use stricts';

/**

 */

var SensorTest = {
  init: function st_init() {
    var _battery = window.navigator.battery;
    $("accelerometer").innerHTML = _battery.charging;
    $("magnetic").innerHTML = _battery.level;
    $("gyroscope").innerHTML = _battery.charging;
    $("light").innerHTML = _battery.level;
    $("proximity").innerHTML = _battery.charging;
  },
  uninit: function st_uninit() {
  }
};

window.addEventListener('load', SensorTest.init.bind(SensorTest));
window.addEventListener('unload', SensorTest.uninit.bind(SensorTest));
