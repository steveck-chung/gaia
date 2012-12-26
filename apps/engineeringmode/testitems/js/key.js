'use stricts';

/**

 */

var KeyTest = {
  init: function kt_init() {
    var key = 'audio.volume.notification';
    var settings = window.navigator.mozSettings;
    var currVolume;
    var upTag = $("vol_up");
    var downTag = $("vol_down");
    var backToMenu = this.backToMenu;
    settings.addObserver('audio.volume.notification', function(evt) {
      var newVol = evt.settingValue;
      if (newVol > currVolume || newVol == 15) {
        upTag.style.visibility = 'hidden';
      } else if (newVol < currVolume || newVol == 0) {
        downTag.style.visibility = 'hidden';
      }
      currVolume = newVol;
      // Test complete!
      if (upTag.style.visibility == 'hidden' &&
          downTag.style.visibility == 'hidden') {
        backToMenu();
      }
    });
    var lock = settings.createLock();
    var request = lock.get(key);
    request.onsuccess = function() {
      var vol = request.result[key];
      if (!vol) {
        return;
      }
      currVolume = vol;
    };
  },
  uninit: function kt_uninit() {
  },
  backToMenu: function kt_backToMenu() {
    var evt = document.createEvent("MouseEvents");
    var back = window.parent.document.getElementById('test-panel-back');
    evt.initMouseEvent("click", true, true, window,
      0, 0, 0, 0, 0, false, false, false, false, 0, null);
    back.dispatchEvent(evt);
  }
};

window.addEventListener('load', KeyTest.init.bind(KeyTest));
window.addEventListener('unload', KeyTest.uninit.bind(KeyTest));
