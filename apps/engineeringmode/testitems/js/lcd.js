'use stricts';

/**
 * Simple Full Color (RGB Black/White) LCD Test
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
          backToMenu();
          break;
      }
    }
    testContainer.innerHTML = '';
    testContainer.style.backgroundColor = 'red';
    testContainer.addEventListener('click', lcdTestHandler.bind(this));
  },
  uninit: function lt_uninit() {
  }
};

window.addEventListener('load', LCDTest.init.bind(LCDTest));
window.addEventListener('unload', LCDTest.uninit.bind(LCDTest));
