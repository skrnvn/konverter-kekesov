var currencies = {
    // rub: {
    //     "buy": 0.28000,
    //     "sale": 0.32000
    // },
    // eur: {
    //     "buy": 19.20000,
    //     "sale": 20.00000
    // },
    // usd: {
    //     "buy": 15.50000,
    //     "sale": 15.85000
    // }
}

var ajax = new XMLHttpRequest();
ajax.open("get", "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5", false);
ajax.onload=loadCurrencies;
ajax.send();

function loadCurrencies(){
    var currenciesScope = JSON.parse(this.responseText);
    console.log(currenciesScope)
    
    for (i = 0; i < currenciesScope.length; i++) {
        currency = currenciesScope[i]
        currencies[currency.ccy.toLowerCase()] = {buy: currency.buy, sale: currency.sale}
    }
    console.log(currencies)
    
}

var currencyName = document.querySelector('#currencyName').value;

function calculateRate () {
    var rawAmount = document.querySelector('#currency-inner').value;
    var amount = parseFloat(rawAmount);
    var result = currencies[currencyName].buy * amount;
    document.querySelector('#currency-outer').value = result;
}