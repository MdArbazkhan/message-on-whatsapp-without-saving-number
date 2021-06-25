//reading form field
const inputFieldElement = document.getElementById("input-field");
const btnElement = document.getElementById("btn");

//creating link
const waLink = "https://api.whatsapp.com/send?phone=";
const waLink2 = "&text";



//functionality
const onBtnClick = () => {
   
    const formInputField = inputFieldElement.value;
    const link = waLink + formInputField + waLink2;
    window.location.replace(link);
    inputFieldElement.value = '';
    formInputField.value = '';

}

btnElement.addEventListener('click' , onBtnClick);



