'use stricts';

/**

 */

var BluetoothTest = {
  init: function bt_init() {
    var settings = window.navigator.mozSettings;
    var btEnabled = settings.createLock().get('bluetooth.enabled');
    $("status").innerHTML = btEnabled;
    $("address").innerHTML = btEnabled;
  },
  uninit: function bt_uninit() {
  }
};

window.addEventListener('load', BluetoothTest.init.bind(BluetoothTest));
window.addEventListener('unload', BluetoothTest.uninit.bind(BluetoothTest));
