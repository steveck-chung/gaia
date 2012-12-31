'use stricts';

/**
 * Screen off testing
 */

var LCDOffTest = {
  init: function lot_init() {
    if (!power) {
      document.body.innerHTML = dumpErrorLog('power');
      return;
    }
    power.screenEnabled = false;
  },
  uninit: function lot_uninit() {

  }
};

window.addEventListener('load', LCDOffTest.init.bind(LCDOffTest));
window.addEventListener('unload', LCDOffTest.uninit.bind(LCDOffTest));
