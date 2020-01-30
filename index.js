var currencies = {
    rub: {
        "buy": 0.28000,
        "sale": 0.32000
    },
    eur: {
        "buy": 19.20000,
        "sale": 20.00000
    },
    usd: {
        "buy": 15.50000,
        "sale": 15.85000
    }
}

var currencyName = document.querySelector('#currencyName').value;

function calculateRate () {
    var rawAmount = document.querySelector('#currency-inner').value;
    var amount = parseFloat(rawAmount);
    var result = currencies[currencyName].buy * amount;
    document.querySelector('#currency-outer').value = result;
}