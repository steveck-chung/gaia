'use stricts';

/**
 * Screen backlight flash test
 */

var BacklightTest = {
  init: function blt_init() {
    if (!power)
      return;

    this.exit = false;
    this.flashInterval = window.setInterval(function flash() {
      if (power.screenBrightness === 1.0 && !this.exit) {
        power.screenBrightness = 0.2;
      } else {
        power.screenBrightness = 1.0;
      }
    }, 600);
  },
  uninit: function blt_uninit() {
    if (!power)
      return;
    this.exit = true;
    power.screenBrightness = 1.0;
    this.flashInterval.clearInterval();
  }
};

window.addEventListener('load', BacklightTest.init.bind(BacklightTest));
window.addEventListener('unload', BacklightTest.uninit.bind(BacklightTest));
