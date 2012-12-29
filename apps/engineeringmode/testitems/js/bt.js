'use stricts';

/**
 * Bluetooth detail information
 */

var BluetoothTest = {
  init: function bt_init() {
    var req = settings.createLock().get('bluetooth.enabled');
    req.onsuccess = function bt_getSettingsSuccess() {
      var btEnabled = req.result['bluetooth.enabled'];
      $('status').textContent = btEnabled;
      // if bluetooth is on when booting, the adapter probably is ready.
      if (btEnabled) {
        this.initDefaultAdapter();
      } else {
        settings.createLock().set({'bluetooth.enabled': true});
      }
    }.bind(this);
    req.onerror = function bt_getSettingsError() {
      var btEnabled = req.result['bluetooth.enabled'];
      $('status').textContent = 'Unable to get bluetooth status!';
    };
    mozBluetooth.onadapteradded = function bt_adapterAdded() {
      this.initDefaultAdapter();
    }.bind(this);
    settings.addObserver('bluetooth.enabled', function(evt) {
      $('status').textContent = evt.settingValue;
    });
  },
  uninit: function bt_uninit() {
    mozBluetooth.onadapteradded = null;
  },
  // Get adapter for BluetoothTransfer when everytime bluetooth is enabled
  initDefaultAdapter: function bt_initDefaultAdapter() {
    if (!mozBluetooth || !mozBluetooth.enabled ||
        !('getDefaultAdapter' in mozBluetooth))
      return;

    var req = mozBluetooth.getDefaultAdapter();
    req.onsuccess = function bt_gotDefaultAdapter(evt) {
      $('address').textContent = req.result.address;
    };
    req.onerror = function bt_gotDefaultAdapterError(evt) {
      $('address').textContent = 'Unable to get the address!';
    };
  }
};

window.addEventListener('load', BluetoothTest.init.bind(BluetoothTest));
window.addEventListener('unload', BluetoothTest.uninit.bind(BluetoothTest));
