const inputs = document.querySelectorAll(".input");
const outputDiv = document.querySelector("#output");

const btn = document.querySelector("#check-btn");



function sumOfAngles() {

    const sum = Number(inputs[0].value) + Number(inputs[1].value) + Number(inputs[2].value);

    return sum;


}

function checkTriangle() {

    const storeSum = sumOfAngles()

    if(storeSum === 180){

        outputDiv.innerText = "Yay, the angles form a Triangle!";
    }

    else {

        outputDiv.innerText = "Oops! It does not form a triangle";
    }
  
}

btn.addEventListener("click", checkTriangle);