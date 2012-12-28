'use stricts';

/**

 */

var RadioTest = {
  init: function rit_init() {
    var req = mozMobileConnection.sendMMI('*#06#');
    req.onsuccess = function onsuccess(evt) {
      $("imei").textContent = evt.target.result;
    }
    req.onerror = function onerror() {
      $("imei").textContent = 'N/A';
    }
    $('phone_num').textContent = mozMobileConnection.iccInfo.msisdn;
    $('current_net').textContent = mozMobileConnection.voice.network.longName;
    $('signal_strength').textContent = mozMobileConnection.voice.signalStrength;
    $('loc_lac').textContent = mozMobileConnection.voice.cell.gsmLocationAreaCode;
    $('loc_cid').textContent = mozMobileConnection.voice.cell.gsmCellId;
    $('roaming').textContent = mozMobileConnection.voice.roaming;
    $('gsm_service').textContent = mozMobileConnection.voice.state;
    $('gprs_service').textContent = mozMobileConnection.voice.state;
    $('net_type').textContent = mozMobileConnection.voice.type;
    $('msg_waiting').textContent = mozVoicemail.status.hasMessages;
    $('call_redirect').textContent = JSON.stringify(mozMobileConnection.getCallForwardingOption());
  },
  uninit: function rit_uninit() {

  }
};

window.addEventListener('load', RadioTest.init.bind(RadioTest));
window.addEventListener('unload', RadioTest.uninit.bind(RadioTest));
