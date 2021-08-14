const inputs = document.querySelectorAll(".input")
const calculateBtn  = document.querySelector("#calculate");
const outputDiv = document.querySelector("#output");


function calculateHypotenuse() {

    const storeSum = calculateSum(Number(inputs[0]. value), Number(inputs[1].value));

    const lengthOfHypotenuse = Math.sqrt(storeSum).toFixed(2);

    outputDiv.innerText = "The length of the hypotenuse is " + lengthOfHypotenuse;


    

 


}

function calculateSum(a,b) {

    const sumOfSquares = a*a + b*b;

    return sumOfSquares;

}




calculateBtn.addEventListener("click", calculateHypotenuse);