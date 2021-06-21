var inputFieldElement = document.getElementById("input-field");
var btnElement = document.getElementById("btn");

var waLink = "https://api.whatsapp.com/send?phone=";
var waLink2 = "&text";

var currentInputValue = '';
inputFieldElement.addEventListener('input' , function(e){
    var currentInputValue = e.target.value;
});

btnElement.addEventListener('click' , function(){
    var whatsappLink = 'waLink' + 'currentInputValue' + 'waLink2';
    window.location.replace = "";
    inputFieldValue.value = '';
    currentInputValue.value = '';
})