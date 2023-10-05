// Global Reference Points 
const inputAmount = document.querySelector("#billAmount");
const rating1 = document.querySelector("#serviceQuality")
const rating2 = document.querySelector("#extraTip")
const calculateButton = document.querySelector("[type=submit]")
const outPut = document.querySelector(".outPut");

// Click Event 
button.addEventListener("click", totalAmount); 

    // Arrow Function 
    const totalAmount = () => { 
    let subTotalTip = rating1 + parseInt((inputAmount)); 
    let totalTip = subTotalTip + parseInt((rating2));
    let tipMessage = `<h1>Your total tip owed is $${totalTip}</h1>`;
    outPut.innerHTML = tipMessage;
}

