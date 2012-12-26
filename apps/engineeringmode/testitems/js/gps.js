'use stricts';

/**

 */

var GPSTest = {
  init: function gpst_init() {
  },
  uninit: function gpst_uninit() {
  }
};

window.addEventListener('load', GPSTest.init.bind(GPSTest));
window.addEventListener('unload', GPSTest.uninit.bind(GPSTest));
