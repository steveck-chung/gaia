'use stricts';

/**
 *  Device production(SW/HW/FW/bluetooth...) information
 */

var ProductionTest = {
  init: function pt_init() {
    var req = settings.createLock().get('*');
    req.onsuccess = function(e) {
      $('sw_version').textContent = req.result['deviceinfo.os'];
      $('fw_version').textContent = req.result['deviceinfo.firmware_revision'];
      $('build_num').textContent = req.result['deviceinfo.platform_build_id'];
      $('hw_version').textContent = req.result['deviceinfo.hardware'];

      var btEnabled = req.result['bluetooth.enabled'];
      $('bt_status').textContent = btEnabled;
      // if bluetooth is on when booting, the adapter probably is ready.
      if (btEnabled) {
        this.initDefaultAdapter();
      } else {
        settings.createLock().set({'bluetooth.enabled': true});
      }
    }.bind(this);
    req.onerror = function(e) {
      dumpErrorLog('Settings database');
    }
    mozBluetooth.onadapteradded = function pt_adapterAdded() {
      this.initDefaultAdapter();
    }.bind(this);
    settings.addObserver('bluetooth.enabled', function(evt) {
      $('bt_status').textContent = evt.settingValue;
    });
  },
  uninit: function pt_uninit() {
    mozBluetooth.onadapteradded = null;
  },
  // Get adapter for BluetoothTransfer when everytime bluetooth is enabled
  initDefaultAdapter: function pt_initDefaultAdapter() {
    if (!mozBluetooth || !mozBluetooth.enabled ||
        !('getDefaultAdapter' in mozBluetooth))
      return;

    var req = mozBluetooth.getDefaultAdapter();
    req.onsuccess = function bt_gotDefaultAdapter(evt) {
      $('bt_address').textContent = req.result.address;
    };
    req.onerror = function bt_gotDefaultAdapterError(evt) {
      $('bt_address').textContent = 'Unable to get the address!';
    };
  }
};

window.addEventListener('load', ProductionTest.init.bind(ProductionTest));
window.addEventListener('unload', ProductionTest.uninit.bind(ProductionTest));
