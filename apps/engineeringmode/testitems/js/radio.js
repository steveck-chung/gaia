'use stricts';

/**

 */

var RadioTest = {
  init: function rit_init() {
    var imeiReq = mozMobileConnection.sendMMI('*#06#');
    imeiReq.onsuccess = function onsuccess(evt) {
      $('imei').textContent = evt.target.result;
    };
    imeiReq.onerror = function onerror() {
      $('imei').textContent = 'N/A';
    };
    var req = settings.createLock().get('*');
    req.onsuccess = function() {
      this.radioDisabled = req.result['ril.radio.disabled'];
      $('preferredNetworkType').value =
        req.result['ril.radio.preferredNetworkType'];
      $('airplain-mode').innerHTML = this.radioDisabled ?
        'Turn on the radio' : 'Turn off the radio';
    }.bind(this);
    req.onerror = function() {
      console.error('Can not get preferred Network Type');
    };
    $('preferredNetworkType').addEventListener('change', this.networkChange);
    $('airplain-mode').addEventListener('click', this.airplainModeToggle);
    $('phone_num').textContent = mozMobileConnection.iccInfo.msisdn;
    $('current_net').textContent = mozMobileConnection.voice.network.longName;
    $('signal_strength').textContent = mozMobileConnection.voice.signalStrength;
    $('loc_lac').textContent =
      mozMobileConnection.voice.cell.gsmLocationAreaCode;
    $('loc_cid').textContent =
      mozMobileConnection.voice.cell.gsmCellId;
    $('roaming').textContent = mozMobileConnection.voice.roaming;
    $('gsm_service').textContent = mozMobileConnection.voice.state;
    $('gprs_service').textContent = mozMobileConnection.voice.state;
    $('net_type').textContent = mozMobileConnection.voice.type;
    $('msg_waiting').textContent =
      (mozVoicemail && mozVoicemail.status.hasMessages) ?
      mozVoicemail.status.hasMessages : 'No message waiting';
    // We use the active status of no reply situation's call forwarding:
    var noReplyReq = mozMobileConnection.getCallForwardingOption(2);
    noReplyReq.onsuccess = function() {
      var noReplyRules = noReplyReq.result;
      $('call_redirect').textContent = noReplyRules.active;
    }
  },
  uninit: function rit_uninit() {

  },
  networkChange: function rit_networkChange(evt) {
    settings.createLock().set({'ril.radio.preferredNetworkType': evt.target.value});
  },
  airplainModeToggle: function rit_airplainModeToggle() {
    this.radioDisabled = !this.radioDisabled;
    settings.createLock().set({'ril.radio.disabled': this.radioDisabled});
    $('airplain-mode').innerHTML = this.radioDisabled ?
      'Turn on the radio' : 'Turn off the radio';
  }
};

window.addEventListener('load', RadioTest.init.bind(RadioTest));
window.addEventListener('unload', RadioTest.uninit.bind(RadioTest));
