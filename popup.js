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
    document.getElementById('container').innerHTML = "$" + usdprice + "<br>" +
                                                      "&#8364;" + eurprice + "<br>" +
                                                      "&#579;" + btcprice + "<br>" +
                                                      satprice + " satoshi<br>" +
                                                      "24h change: " + twofourhr + "%";
  }
};
xvtc.send();
