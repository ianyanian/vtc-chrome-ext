var xvtc = new XMLHttpRequest();
xvtc.open('GET', 'http://coincap.io/page/VTC', true);
xvtc.onreadystatechange = function(){
  if(xvtc.readyState == 4){
    var ticker = JSON.parse(xvtc.responseText);
    var usdprice = Math.round(ticker.price_usd * 1000) / 1000;
    var eurprice = Math.round(ticker.price_eur * 1000) / 1000;
    var btcprice = Math.round(ticker.price_btc * 100000000) / 100000000;
    var satprice = Math.round(ticker.price_btc * 100000000);
    var twofourhr = ticker.cap24hrChange;
    load_options(usdprice, eurprice, btcprice, satprice, twofourhr);
  }
};
xvtc.send();


document.querySelector('#options').addEventListener("click", function() {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL('options.html'));
  }
});

function load_options(usdprice, eurprice, btcprice, satprice, twofourhr){
  chrome.storage.sync.get([
    "showUsd",
    "showEur",
    "showBtc",
    "showSat",
    "showTwoFourHr"
  ], function(items){
    if(items.showUsd == false){
      document.getElementById('usd').innerHTML = "";
    }
    else{
      document.getElementById('usd').innerHTML = "$" + usdprice + "<br>";
    }
    if(items.showEur == false){
      document.getElementById('eur').innerHTML = "";
    }
    else{
      document.getElementById('eur').innerHTML = "&#8364;" + eurprice + "<br>";
    }
    if(items.showBtc == false){
      document.getElementById('btc').innerHTML = "";
    }
    else{
      document.getElementById('btc').innerHTML = "&#579;" + btcprice + "<br>";
    }
    if(items.showSat == false){
      document.getElementById('sat').innerHTML = "";
    }
    else{
      document.getElementById('sat').innerHTML = satprice + " satoshi<br>";
    }
    if(items.showTwoFourHr == false){
      document.getElementById('twofourhr').innerHTML = "";
    }
    else{
      document.getElementById('twofourhr').innerHTML = "24h change: " + twofourhr + "%";
    }
  });
}
