'use stricts';

/**

 */

var SDTest = {
  init: function sdt_init() {
    var deviceStorage = navigator.getDeviceStorage('sdcard');

    if (!deviceStorage) {
      console.error('Cannot get DeviceStorage');
      return;
    }

    var request = deviceStorage.stat();
    request.onsuccess = function(e) {
      var freeSzie = e.target.result.freeBytes;
      var usedSize = e.target.result.totalBytes;
      var totalSize = freeSzie + usedSize;
      if (totalSize == 0) {
        $('mounted').textContent = 'No';
        return;
      }
      var fixedDigits = (totalSize < 1024 * 1024) ? 0 : 1;
      var totalSizeInfo = FileSizeFormatter.getReadableFileSize(
        totalSize, fixedDigits);
      fixedDigits = (freeSzie < 1024 * 1024) ? 0 : 1;
      var freeSizeInfo = FileSizeFormatter.getReadableFileSize(
        freeSzie, fixedDigits);
      fixedDigits = (usedSize < 1024 * 1024) ? 0 : 1;
      var usedSizeInfo = FileSizeFormatter.getReadableFileSize(
        usedSize, fixedDigits);
      $('mounted').textContent = 'Yes';
      $('used').textContent = usedSizeInfo.size + usedSizeInfo.unit;
      $('total').textContent = totalSizeInfo.size + totalSizeInfo.unit;
      $('available').textContent = freeSizeInfo.size + freeSizeInfo.unit;
    };

  },
  uninit: function sdt_uninit() {
  }
};

window.addEventListener('load', SDTest.init.bind(SDTest));
window.addEventListener('unload', SDTest.uninit.bind(SDTest));
