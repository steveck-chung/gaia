'use stricts';

/**
 *
 */

var MemoryTest = {
  init: function mt_init() {
    var deviceStorage = navigator.getDeviceStorage('apps');

    if (!deviceStorage) {
      console.error('Cannot get DeviceStorage');
      return;
    }
    var request = deviceStorage.stat();
    request.onsuccess = function(e) {
      var freeSzie = e.target.result.freeBytes;
      var totalSize = e.target.result.totalBytes + e.target.result.freeBytes;
      var fixedDigits = (totalSize < 1024 * 1024) ? 0 : 1;
      var totalSizeInfo = FileSizeFormatter.getReadableFileSize(
        totalSize, fixedDigits);
      fixedDigits = (freeSzie < 1024 * 1024) ? 0 : 1;
      var freeSizeInfo = FileSizeFormatter.getReadableFileSize(
        freeSzie, fixedDigits);
      $('rom_total').innerHTML = totalSizeInfo.size + totalSizeInfo.unit;
      $('rom_available').innerHTML = freeSizeInfo.size + freeSizeInfo.unit;
    };
  },
  uninit: function mt_uninit() {
  }
};

window.addEventListener('load', MemoryTest.init.bind(MemoryTest));
window.addEventListener('unload', MemoryTest.uninit.bind(MemoryTest));
