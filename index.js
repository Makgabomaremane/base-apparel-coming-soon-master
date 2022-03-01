function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();

return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}

window.addEventListener('load', () =>{
    const button = document.querySelector('#clear');
    button.addEventListener('click', () =>{
        document.querySelector('#enter').value = " ";
    });
});