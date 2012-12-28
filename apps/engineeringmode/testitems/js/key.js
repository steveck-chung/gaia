'use stricts';

/**
 * Hardware volume key press testing
 */

var KeyTest = {
  init: function kt_init() {
    var key = 'audio.volume.notification';
    var currVolume;
    var upTag = $("vol_up");
    var downTag = $("vol_down");
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
  }
};

window.addEventListener('load', KeyTest.init.bind(KeyTest));
window.addEventListener('unload', KeyTest.uninit.bind(KeyTest));
