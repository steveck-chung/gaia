'use stricts';

/**

 */

var SensorTest = {
  init: function st_init() {
    window.addEventListener('devicelight', this);
    window.addEventListener('userproximity', this);
    window.addEventListener('devicemotion', this);
  },
  uninit: function st_uninit() {
  },
  handleEvent: function st_handleEvent(evt) {
    switch (evt.type) {
      case 'devicelight':
        $("light").textContent = evt.value;
        break;
      case 'userproximity':
        $("proximity").textContent = evt.near;
        break
      case 'devicemotion':
        if (evt.accelerationIncludingGravity) {
          $('accelerometer').textContent =
            'X : ' + evt.accelerationIncludingGravity.x +
            ' Y : ' + evt.accelerationIncludingGravity.y +
            ' Z : ' + evt.accelerationIncludingGravity.z;
        } else if (evt.acceleration) {
          $('accelerometer').textContent =
            'X : ' + evt.acceleration.x +
            ' Y : ' + evt.acceleration.y +
            ' Z : ' + evt.acceleration.z;
        }
        break;
    }
  }
};

window.addEventListener('load', SensorTest.init.bind(SensorTest));
window.addEventListener('unload', SensorTest.uninit.bind(SensorTest));
