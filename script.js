
// Password length
let lengthslider = document.getElementById("lengthslider")
let slidervalue = document.getElementById("slidervalue")

slidervalue.textContent = lengthslider.value

lengthslider.addEventListener("input", ()=>{
    slidervalue.textContent = lengthslider.value
})

// Checkboxes

let Checkboxes = document.querySelectorAll(".checkbox")

Array.from(Checkboxes).forEach(Element=>{
    Element.addEventListener('click',(e)=>{
        if(e.target.innerText=="radio_button_unchecked"){
            e.target.innerText="task_alt"
            e.target.nextElementSibling.nextElementSibling.setAttribute('checked',"")
        }
        else{
            e.target.innerText="radio_button_unchecked"
            e.target.nextElementSibling.nextElementSibling.removeAttribute("checked")
        }
             
    })
})

let includelabels = document.querySelectorAll(".row label")

Array.from(includelabels).forEach(Element=>{
    Element.addEventListener('click',(e)=>{
        if(e.target.previousElementSibling.innerText=="radio_button_unchecked"){
            e.target.previousElementSibling.innerText="task_alt"
           
        }
        else{
            e.target.previousElementSibling.innerText="radio_button_unchecked"
        }
             
    })
})

// Generate Password
let generatebtn = document.getElementById("generatebtn")
let Password = document.getElementById("password")

generatebtn.addEventListener('click', function(){
    let length = lengthslider.value
    
    let uppercase = document.getElementById("upperCase").checked
    let lowercase = document.getElementById("lowerCase").checked
    let symbols = document.getElementById("Symbols").checked
    let numbers = document.getElementById("numbers").checked

    let password_generated = generatepassword(length,uppercase,lowercase,symbols,numbers)
    Password.value = password_generated
})

function generatepassword(length,uppercase,lowercase,symbols,numbers){
    let charset = ""
    let string = ""

    if(uppercase){
        charset+="ABCDEFGHIJKLMOPQRSTUVWXYZ"
    }
    if(lowercase){
        charset+="abcdefghijklmopqrstuvwxyz"
    }
    if(symbols){
        charset+="!@#$%^&*()_"
    }
    if(numbers){
        charset+="0123456789"
    }
    
    for(let i=0; i<length; i++){
        string+=charset.charAt(Math.floor(Math.random()*charset.length))
    }
    return string;
}

// Copy Password

let copyIcon = document.getElementById("copyIcon");

copyIcon.addEventListener('click',()=>{
    navigator.clipboard.writeText(Password.value)
    copyIcon.innerText = 'check'
})