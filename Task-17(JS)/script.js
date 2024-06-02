let nameText = document.querySelector('.nameText');
let emailText = document.querySelector('.emailText');
let orgText = document.querySelector('.orgText');

let txt1 = document.querySelector(".txt1");
let txt2 = document.querySelector(".txt2");
let txt3 = document.querySelector(".txt3");
let txt4 = document.querySelector(".txt4");
let txt5 = document.querySelector(".txt5");


let nameInp = document.querySelector('.nameInp');
let emailInp = document.querySelector('.emailInp');
let orgInp = document.querySelector('.orgInp');

let textarea1 = document.querySelector(".texta1")
let textarea2 = document.querySelector(".texta2")
let textarea3 = document.querySelector(".texta3")
let textarea4 = document.querySelector(".texta4")
let textarea5 = document.querySelector(".texta5")

let SubmitBtn = document.querySelector('.btnn');


SubmitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    nameValidate();
    emailValidate();
    orgValidate();
    text1Validate();
    text2Validate();
    text3Validate();
    text4Validate();
    text5Validate();
})



function nameValidate() {
    let nameReg = /^[A-Z][a-zA-Z0-9]+( [A-Z][a-zA-Z0-9]*)*$/;
    let inputValue = nameInp.value;

    if(nameReg.test(inputValue)){
        nameText.innerHTML = 'Valid!';
        nameText.style.color = "green";
        
    }
    else{
        nameText.innerHTML = 'First Letter Of Name Should Be Capital';
        nameText.style.color = "White";
        console.log(nameInp);
    }
}



function emailValidate() {
    let emailValue = emailInp.value;
    let emailReg = /^([a-zA-Z0-9\s]+)@([a-zA-Z0-9\s]+).([a-zA-Z]+)$/;

    if(emailReg.test(emailValue)){
        emailText.innerHTML = 'Valid!';
        emailText.style.color = "green";
        
    }
    else{
        emailText.innerHTML = 'Enter valid email';
        emailText.style.color = "White";
    }
    
}
function orgValidate() {
    let orgReg = /^[A-Z][a-zA-Z0-9]+( [A-Z][a-zA-Z0-9]*)*$/;
    let orgValue = orgInp.value;

    if(orgReg.test(orgValue)){
        orgText.innerHTML = 'Valid!';
        orgText.style.color = "green";
        
    }
    else{
        orgText.innerHTML = 'First Letter Should Be Capital';
        orgText.style.color = "White";

    }
}

function text1Validate(){

    let textReg = /^[a-zA-Z0-9\s]{20,300}$/;
    let textValue = textarea1.value;

    if(textReg.test(textValue)){
        txt1.innerHTML = 'Valid!';
        txt1.style.color = "green";
        
    }
    else{
        txt1.innerHTML = ' Type atleast 20 letters';
        txt1.style.color = "White";
    }

}

function text2Validate(){

    let textReg = /^[a-zA-Z0-9\s]{20,300}$/;
    let textValue = textarea2.value;

    if(textReg.test(textValue)){
        txt2.innerHTML = 'Valid!';
        txt2.style.color = "green";
        
    }
    else{
        txt2.innerHTML = ' Type atleast 20 letters';
        txt2.style.color = "White";
    }

}
function text3Validate(){

    let textReg = /^[a-zA-Z0-9\s]{20,300}$/;
    let textValue = textarea3.value;

    if(textReg.test(textValue)){
        txt3.innerHTML = 'Valid!';
        txt3.style.color = "green";
        
    }
    else{
        txt3.innerHTML = ' Type atleast 20 letters';
        txt3.style.color = "White";
    }

}
function text4Validate(){

    let textReg = /^[a-zA-Z0-9\s]{20,300}$/;
    let textValue = textarea4.value;

    if(textReg.test(textValue)){
        txt4.innerHTML = 'Valid!';
        txt4.style.color = "green";
        
    }
    else{
        txt4.innerHTML = ' Type atleast 20 letters';
        txt4.style.color = "White";
    }

}
function text5Validate(){

    let textReg = /^[a-zA-Z0-9\s]{20,300}$/;
    let textValue = textarea5.value;

    if(textReg.test(textValue)){
        txt5.innerHTML = 'Valid!';
        txt5.style.color = "green";
        
    }
    else{
        txt5.innerHTML = 'Type atleast 20 characters';
        txt5.style.color = "White";
    }

}