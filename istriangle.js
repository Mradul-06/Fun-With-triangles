const angle1 = document.querySelector("#angle1")
const angle2 = document.querySelector("#angle2")
const angle3 = document.querySelector("#angle3")
const submit = document.querySelector("#is-triangle")
const output = document.querySelector(".output-div") 



function isTriangle(angle1,angle2,angle3){
    if(Number(angle1.value)+Number(angle2.value)+Number(angle3.value)===180){
        showMessage("This is a triangle")
    }
    else{
        showMessage("This is not a triangle")
    }
}

function showMessage(message){
    output.innerText=message;
}


submit.addEventListener("click",function(event){
    event.preventDefault();
    isTriangle(angle1, angle2, angle3);

})



