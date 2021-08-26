const base = document.querySelector('#base');
const height = document.querySelector('#height');
const output = document.querySelector('.output-div');
const btn = document.querySelector("#submitBtn");


function clickHandler(e){
    e.preventDefault()
    let area = 1/2*base.value*height.value
    output.innerText = "The Area Is "+ area
}


btn.addEventListener("click",clickHandler)
