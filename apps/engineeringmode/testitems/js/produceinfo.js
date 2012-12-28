'use stricts';

/**

 */

var ProductionTest = {
  init: function pt_init() {
    var request = settings.createLock().get('*');
    request.onsuccess = function(e) {
      $('sw_version').textContent = request.result['deviceinfo.os'];
      $('fw_version').textContent = request.result['deviceinfo.firmware_revision'];
      $('build_num').textContent = request.result['deviceinfo.platform_build_id'];
      $('hw_version').textContent = request.result['deviceinfo.hardware'];
    }
    // $('').textContent = request.result[''];
  },
  uninit: function pt_uninit() {

  }
};

window.addEventListener('load', ProductionTest.init.bind(ProductionTest));
window.addEventListener('unload', ProductionTest.uninit.bind(ProductionTest));
