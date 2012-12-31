'use stricts';

/**
 * Screen touch test : 2 testscenario:
 *   1: Touch 4 corners and center (5 points)
 *   2: Touch 4 edge around the screen (28 points)
 */

var TouchpaintTest = {
  get testBtn() {
    delete this.testBtn;
    return this.testBtn = $('touchtest');
  },
  init: function tpt_init() {
    this.testBtn.addEventListener('click', this.touchTest.bind(this));
  },
  uninit: function tpt_uninit() {
  },
  clickHandler: function tpt_clickHandler(evt) {
    var target = evt.target;
    if (target.classList.contains('touch-target')) {
      target.setAttribute('data-touched', true);
    } else if (target.firstElementChild.classList.contains('touch-target')) {
      target.firstElementChild.setAttribute('data-touched', false);
    }
    var testcase = document.body.getAttribute('data-testcase');
    if (testcase == 'corner-test') {
      var queryStr = '.corner-target[data-touched=true]';
      var checked = document.body.querySelectorAll(queryStr).length;
      if (checked < 5) {
        return;
      }
      this.attachEdgeBtns();
    } else {
      var queryStr = '.edge-target[data-touched=true]';
      var checked = document.body.querySelectorAll(queryStr).length;
      if (checked < 28) {
        return;
      }
      window.parent.document.mozCancelFullScreen();
      backToMenu();
    }
  },
  attachCornerBtns: function tpt_attachCornerBtns() {
    var positionList =
      [{top: '0', left: '0' },
       {top: '0', left: 'calc(100% - 5rem)'},
       {top: 'calc(100% - 5rem)', left: '0'},
       {top: 'calc(100% - 5rem)', left: 'calc(100% - 5rem)'},
       {top: 'calc((100% - 5rem) / 2)', left: 'calc((100% - 5rem) / 2)'}];
    for (var i = 0; i < positionList.length; i++) {
      var node =
        document.getElementsByClassName('corner-touch-area')[0].cloneNode();
      node.style.left = positionList[i].left;
      node.style.top = positionList[i].top;
      node.addEventListener('click', this.clickHandler.bind(this));
      document.body.appendChild(node);
    }
  },
  attachEdgeBtns: function tpt_attachEdgeBtns() {
    document.body.setAttribute('data-testcase', 'edge-test');
    var edgePos = 'calc(100% - 5rem)';
    // Attach top/bottom edge buttons
    for (var i = 0; i < 6; i++) {
      var topNode =
        document.getElementsByClassName('edge-touch-area')[0].cloneNode();
      var bottomNode =
        document.getElementsByClassName('edge-touch-area')[0].cloneNode();
      topNode.style.left =
        bottomNode.style.left = 'calc((20% - 1rem) * ' + i + ')';
      topNode.style.top = '0';
      bottomNode.style.top = edgePos;
      topNode.addEventListener('click', this.clickHandler.bind(this));
      bottomNode.addEventListener('click', this.clickHandler.bind(this));
      document.body.appendChild(topNode);
      document.body.appendChild(bottomNode);
    }
    // Attach left/right edge buttons
    for (var i = 0; i < 8; i++) {
      var leftNode =
        document.getElementsByClassName('edge-touch-area')[0].cloneNode();
      var rightNode =
        document.getElementsByClassName('edge-touch-area')[0].cloneNode();
      leftNode.style.top =
        rightNode.style.top = 'calc((100% - 5rem) / 9 * ' + (i + 1) + ')';
      leftNode.style.left = '0';
      rightNode.style.left = edgePos;
      leftNode.addEventListener('click', this.clickHandler.bind(this));
      rightNode.addEventListener('click', this.clickHandler.bind(this));
      document.body.appendChild(leftNode);
      document.body.appendChild(rightNode);
    }
  },
  touchTest: function tpt_init() {
    window.parent.document.getElementById('test-iframe').mozRequestFullScreen();
    document.body.setAttribute('data-testcase', 'corner-test');
    this.attachCornerBtns();
    this.testBtn.style.display = 'none';
  }
};

window.addEventListener('load', TouchpaintTest.init.bind(TouchpaintTest));
window.addEventListener('unload', TouchpaintTest.uninit.bind(TouchpaintTest));
