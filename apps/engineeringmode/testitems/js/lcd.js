'use stricts';

/**

 */

var LCDTest = {
  init: function lt_init() {
    $('lcdtest').addEventListener('click', this.startTest.bind(this));
  },
  startTest: function lt_startTest() {
    var testContainer = $('lcdtest');
    testContainer.mozRequestFullScreen();
    var lcdTestHandler = function lt_lcdTestHandler() {
      switch (testContainer.style.backgroundColor) {
        case 'red':
          testContainer.style.backgroundColor = 'green';
          break;
        case 'green':
          testContainer.style.backgroundColor = 'blue';
          break;
        case 'blue':
          testContainer.style.backgroundColor = 'black';
          break;
        case 'black':
          testContainer.style.backgroundColor = 'white';
          break;
        case 'white':
          testContainer.removeEventListener('click', lcdTestHandler);
          testContainer.style.backgroundColor = '';
          document.mozCancelFullScreen();
          this.backToMenu();
          break;
      }
    }
    testContainer.innerHTML = '';
    testContainer.style.backgroundColor = 'red';
    testContainer.addEventListener('click', lcdTestHandler.bind(this));
  },
  uninit: function lt_uninit() {
  },
  backToMenu: function lt_backToMenu() {
    var evt = document.createEvent("MouseEvents");
    var back = window.parent.document.getElementById('test-panel-back');
    evt.initMouseEvent("click", true, true, window,
      0, 0, 0, 0, 0, false, false, false, false, 0, null);
    back.dispatchEvent(evt);
  }
};

window.addEventListener('load', LCDTest.init.bind(LCDTest));
window.addEventListener('unload', LCDTest.uninit.bind(LCDTest));
