const side1 = document.querySelector('#side1');
const side2 = document.querySelector('#side2');
const output = document.querySelector('.output-div');
const btn = document.querySelector("#submitBtn");


function clickHandler(e){
    e.preventDefault()
    sumOfSquare = side1.value**2 + side2.value**2
    hypotenuse = Math.sqrt(sumOfSquare)
    output.innerText = hypotenuse

}


btn.addEventListener("click",clickHandler)
