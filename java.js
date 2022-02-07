// Get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");
const success = document.querySelector("#success");

// Felmeddelande när man inte fyller i kontakt rutan som man ska tex glömt @ på sin mail eller inte fyllt i namnet.
function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;

    }

    if(!emailIsValid(email.value)){
        errorNodes[0].innerText = "Invalid email adress";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.lenght < 1){
        errorNodes[2].innerText = "Please enter message";
        msg.classList.add("error-border");
        errorFlag = true;

    }

    if (!errorFlag){
        success.innerText = "Success!";
    }
}


//Fixa fel och meddelande lyckats
function clearMessages(){
    for(let i = 0; i < errorNodes.lenght; i++){
        errorNodes [i].innerText = "";
    }
nameInput.classList.remove("error-border")
email.classList.remove("error-border")
msg.classList.remove("error-border")
}

//Kolla ifall mail stämmer
function emailIsValid(email){
    let pattern = /\S+@+\S+\.\S+/;
    return pattern.test(email);

}
