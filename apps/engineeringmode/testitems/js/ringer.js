'use stricts';

/**

 */

var RingerTest = {
  init: function rt_init() {
    $('ringertest').addEventListener('click', this.play);
  },
  uninit: function rt_uninit() {

  },
  play: function rt_play() {
    var ringtonePlayer = new Audio();
    ringtonePlayer.loop = true;
    var selectedSound = '../../style/ringtones/classic.ogg';
    ringtonePlayer.src = selectedSound;
    ringtonePlayer.play();
    window.setTimeout(function _pauseRingtone() {
      ringtonePlayer.pause();
    }, 5000);
  }
};

window.addEventListener('load', RingerTest.init.bind(RingerTest));
window.addEventListener('unload', RingerTest.uninit.bind(RingerTest));
