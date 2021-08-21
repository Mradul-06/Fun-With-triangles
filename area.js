const base = document.querySelector('#base');
const height = document.querySelector('#height');
const output = document.querySelector('.outputDiv');
const btn = document.querySelector("#submitBtn");


function clickHandler(e){
    e.preventDefault()
    let area = 1/2*base.value*height.value
    output.innerText = area
}


btn.addEventListener("click",clickHandler)
