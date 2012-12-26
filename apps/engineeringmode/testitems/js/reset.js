'use stricts';

/**

 */

var FactoryReset = {
  init: function fr_init() {
    $('factoryreset').addEventListener('click', this.reset);
  },
  uninit: function fr_uninit() {

  },
  reset: function fr_play() {
    if (!power) {
      console.error('Cannot get mozPower');
      return;
    }

    if (!power.factoryReset) {
      console.error('Cannot invoke mozPower.factoryReset()');
      return;
    }
    power.factoryReset();
  }
};

window.addEventListener('load', FactoryReset.init.bind(FactoryReset));
window.addEventListener('unload', FactoryReset.uninit.bind(FactoryReset));
