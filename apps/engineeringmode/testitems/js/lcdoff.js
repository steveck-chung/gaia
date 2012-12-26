'use stricts';

/**

 */

var LCDOffTest = {
  init: function lot_init() {
    power.screenEnabled = false;
  },
  uninit: function lot_uninit() {

  }
};

window.addEventListener('load', LCDOffTest.init.bind(LCDOffTest));
window.addEventListener('unload', LCDOffTest.uninit.bind(LCDOffTest));
