 
const form = document.getElementById("form");

const password = document.getElementById("password");
const password_1 = document.getElementById("password_1");
const paragaph = document.getElementById("paragaph");


let isValid = false;
let passwordMatch = false;

// validate our password

function validation(){
    isValid = form.checkValidity(); 

    if(!isValid){
        // do something with the condition
        paragaph.textContent="please fill the form correkly";
        paragaph.style.color="red";
        paragaph.style.fontSize="28px";
        return;
    }

    // compering the 2 pawsords password and passwod_1

    if (password.value===password_1.value){
        passwordMatch= true;
        password.style.borderColor="green";
        password.style.borderColor="green";

    }
    else{
        passwordMatch= false;
        password.style.borderColor="red";
        password.style.borderColor="red";
        paragaph.textContent="please make sure the passords match";
        return;
    }
    if(isValid && passwordMatch ){
        passwordMatch=true;
        paragaph.textContent="Congeatulation";
        paragaph.style.color="green";
        return;
    }

}


//  function or storing data

function storeData(){
    const userData={
        name:form.firstname.value,
        secondName:form.secondname.value,
        email:form.email.value,
        phone:form.phone.value,
        password:form.password.value,
        course:form.course.value,
    }
    console.log(userData)

}

function processForm(event){
    event.preventDefault()
    validation()
    storeData()
}
form.addEventListener("click",processForm);



