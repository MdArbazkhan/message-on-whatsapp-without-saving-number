//reading form field
const inputFieldElement = document.getElementById("input-field");
const btnElement = document.getElementById("btn");
const codeElement = document.getElementById("code");

//creating link
const waLink = "https://api.whatsapp.com/send?phone=";
const waLink2 = "&text";



//functionality
const onBtnClick = () => {
    
    const codeInputField = codeElement.value;
    const formInputField = inputFieldElement.value;
    const link = waLink + codeInputField + formInputField + waLink2;
    window.open(link);
    inputFieldElement.value = '';
    formInputField.value = '';
    codeInputField.value = '';

}

btnElement.addEventListener('click' , onBtnClick);



