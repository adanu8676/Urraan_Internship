const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const amountInput = document.querySelector(".amount input");

let exchangeRates = {};

let getData = async () => {
    let response = await fetch(BASE_URL);
    let result = await response.json();
    console.log(result);

    exchangeRates = result.usd; 

    let keys = Object.keys(exchangeRates);
    console.log(keys);

    

    for (const key of keys) {
        let optionFrom = document.createElement("option");
        optionFrom.value = key;
        optionFrom.textContent = key;
        fromCurr.appendChild(optionFrom);

        let optionTo = document.createElement("option");
        optionTo.value = key;
        optionTo.textContent = key;
        toCurr.appendChild(optionTo);
    }
};

let convertCurrency = () => {
    let amount = parseFloat(amountInput.value);
    let fromCurrency = fromCurr.value;
    let toCurrency = toCurr.value;

    if (!amount || !fromCurrency || !toCurrency) {
        msg.textContent = "Please enter a valid amount and select currencies.";
        return;
    }

    let fromRate = exchangeRates[fromCurrency];
    let toRate = exchangeRates[toCurrency];


    let convertedAmount = (amount / fromRate) * toRate;
    msg.textContent = `${amount} ${fromCurrency.toUpperCase()} = ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;
};

btn.addEventListener("click", (e) => {
    e.preventDefault();
    convertCurrency();
});

getData();
