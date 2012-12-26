'use strict';

function $(id) {
  return document.getElementById(id);
}

var battery = navigator.battery;
var power = navigator.mozPower;

/**
 * Helper class for formatting file size strings
 * required by *_storage.js
 */

// var FileSizeFormatter = (function FileSizeFormatter(fixed) {
//   function getReadableFileSize(size, digits) { // in: size in Bytes
//     if (size === undefined)
//       return {};

//     var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
//     var i = 0;
//     while (size >= 1024) {
//       size /= 1024;
//       ++i;
//     }

//     var sizeString = size.toFixed(digits || 0);
//     var sizeDecimal = parseFloat(sizeString);

//     return {
//       size: sizeDecimal.toString(),
//       unit: units[i]
//     };
//   }

//   return { getReadableFileSize: getReadableFileSize };
// })();