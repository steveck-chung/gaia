'use stricts';

/**
 */

var AudioLoopTest = {
  init: function alt_init() {
  },
  uninit: function alt_uninit() {
  }, 
  loopBackTest: function alt_loopBackTest() {
  }
};

window.addEventListener('load', AudioLoopTest.init.bind(AudioLoopTest));
window.addEventListener('unload', AudioLoopTest.uninit.bind(AudioLoopTest));
