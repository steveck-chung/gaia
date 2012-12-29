'use strict';

var battery = navigator.battery;
var power = navigator.mozPower;
var settings = navigator.mozSettings;
var mozMobileConnection = navigator.mozMobileConnection;
var mozVoicemail = navigator.mozVoicemail;
var mozBluetooth = navigator.mozBluetooth;

function $(id) {
  return document.getElementById(id);
}

function backToMenu() {
  var evt = document.createEvent('MouseEvents');
  var back = window.parent.document.getElementById('test-panel-back');
  evt.initMouseEvent('click', true, true, window,
    0, 0, 0, 0, 0, false, false, false, false, 0, null);
  back.dispatchEvent(evt);
}
/**
 * Helper class for formatting file size strings
 * required by *_storage.js
 */

var FileSizeFormatter = (function FileSizeFormatter(fixed) {
  function getReadableFileSize(size, digits) { // in: size in Bytes
    if (size === undefined)
      return {};

    var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = 0;
    while (size >= 1024) {
      size /= 1024;
      ++i;
    }

    var sizeString = size.toFixed(digits || 0);
    var sizeDecimal = parseFloat(sizeString);

    return {
      size: sizeDecimal.toString(),
      unit: units[i]
    };
  }

  return { getReadableFileSize: getReadableFileSize };
})();