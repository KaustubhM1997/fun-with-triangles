const areaInputs = document.querySelectorAll(".input");

const areaBtn = document.querySelector("#calculate-area");

const outputDiv = document.querySelector("#output");

function findArea() {

    const area = calculateArea(Number(areaInputs[0].value), Number(areaInputs[1].value));

    outputDiv.innerText = "The area of the triangle is " + area + " square cm";
    
}

function calculateArea(a, b) {

    const area = 0.5 * a * b;

   return area;
}




areaBtn.addEventListener("click", findArea);