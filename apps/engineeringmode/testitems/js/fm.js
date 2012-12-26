'use stricts';

/**

 */
var mozFMRadio = window.navigator.mozFMRadio;
var FMTest = {
  init: function fmt_init() {
    var btns = document.getElementsByTagName('button');
    mozFMRadio.onantennaavailablechange = this.updateHeadsetStatus;
    this.updateHeadsetStatus();
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', this.setFrequency);
    }
  },
  uninit: function fmt_uninit() {
    if (!mozFMRadio.enabled) {
      return;
    }
    mozFMRadio.disable();
  },
  setFrequency: function fmt_setFrequency(evt) {
    var freq = parseFloat(evt.target.getAttribute('data-frequency'));
    if (mozFMRadio.enabled) {
      mozFMRadio.setFrequency(freq);
    } else {
      mozFMRadio.enable(freq);
    }
  },
  updateHeadsetStatus: function fmt_updateHeadsetStatus() {
    $('insert_headset').hidden = mozFMRadio.antennaAvailable;
  }
};

window.addEventListener('load', FMTest.init.bind(FMTest));
window.addEventListener('unload', FMTest.uninit.bind(FMTest));
