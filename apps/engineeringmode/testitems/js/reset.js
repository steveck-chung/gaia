'use stricts';

/**
 *  Factory Reset page
 */

var FactoryReset = {
  init: function fr_init() {
    $('factoryreset').addEventListener('click', this.reset);
  },
  uninit: function fr_uninit() {

  },
  reset: function fr_play() {
    if (!power) {
      document.body.innerHTML = dumpErrorLog('mozPower');
      return;
    }

    if (!power.factoryReset) {
      document.body.innerHTML = dumpErrorLog('mozPower.factoryReset');
      return;
    }
    power.factoryReset();
  }
};

window.addEventListener('load', FactoryReset.init.bind(FactoryReset));
window.addEventListener('unload', FactoryReset.uninit.bind(FactoryReset));
