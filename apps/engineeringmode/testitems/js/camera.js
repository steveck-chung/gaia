'use stricts';

/**

 */

var CameraTest = {
  init: function ct_init() {
    $('cameratest').addEventListener('click', this.launchCamera);
  },
  uninit: function ct_uninit() {

  },
  launchCamera: function ct_launchCamera() {
    var a = new MozActivity({
      name: 'record',
      data: {
        type: 'photos'
      }
    });
  }
};

window.addEventListener('load', CameraTest.init.bind(CameraTest));
window.addEventListener('unload', CameraTest.init.bind(CameraTest));
