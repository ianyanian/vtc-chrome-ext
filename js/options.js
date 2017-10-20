function save_options() {
  var usd_value = document.getElementById('usd_check').checked;
  var eur_value = document.getElementById('eur_check').checked;
  var btc_value = document.getElementById('btc_check').checked;
  var sat_value = document.getElementById('sat_check').checked;
  var twofourhr_value = document.getElementById('twofourhr_check').checked;
  chrome.storage.sync.set({
    "showUsd": usd_value,
    "showEur": eur_value,
    "showBtc": btc_value,
    "showSat": sat_value,
    "showTwoFourHr": twofourhr_value
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    "showUsd": true,
    "showEur": true,
    "showBtc": true,
    "showSat": true,
    "showTwoFourHr": true
  }, function(items) {
    document.getElementById('usd_check').checked = items.showUsd;
    document.getElementById('eur_check').checked = items.showEur;
    document.getElementById('btc_check').checked = items.showBtc;
    document.getElementById('sat_check').checked = items.showSat;
    document.getElementById('twofourhr_check').checked = items.showTwoFourHr;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
