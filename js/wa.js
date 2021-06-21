// reading form field
const inputFieldElement = document.getElementById("input-field");
const btnElement = document.getElementById("btn");

const waLink = "https://api.whatsapp.com/send?phone=";
const waLink2 = "&text";




const onBtnClick = () => {
   
    const formInputField = inputFieldElement.value;
    const link = waLink + formInputField + waLink2;
    window.location.replace(link);

}

btnElement.addEventListener('click' , onBtnClick);
