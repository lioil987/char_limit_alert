var formId=0;
var form=document.querySelectorAll('form.limited'+formId);
var input =document.querySelectorAll('form.limited input');
var textarea=document.querySelectorAll('form.limited textarea');
var message='limited'
var compeletMessage='The number of allowed characters is '



input.forEach(element => {

        let div=document.createElement('div');
        div.classList.add('inputContainer');
        div.appendChild(element.cloneNode());
        element.parentElement.insertBefore(div,element.nextSibling)
        element.remove();

   
});

var input =document.querySelectorAll('form.limited div.inputContainer input');

input.forEach(element => {
    var maxlength=element.getAttribute('maxlength')
    element.addEventListener('input',function()
    {
        element.value.length < maxlength?removeAlert(element.parentElement,Array.from(input).indexOf(element)):creatAlert(element.parentElement,Array.from(input).indexOf(element),'alertInput',message,compeletMessage+maxlength);

    })

});

textarea.forEach(element => {

    let div=document.createElement('div');
    div.classList.add('textareaContainer');
    div.appendChild(element.cloneNode());
    element.parentElement.insertBefore(div,element.nextSibling)
    element.remove();


});

var textarea =document.querySelectorAll('form.limited div.textareaContainer textarea');

textarea.forEach(element => {
var maxlength=element.getAttribute('maxlength')
element.addEventListener('input',function()
{
    element.value.length < maxlength?removeAlert(element.parentElement,Array.from(input).indexOf(element)):creatAlert(element.parentElement,Array.from(input).indexOf(element),'alertTextarea',message,compeletMessage+maxlength);

})

});

function creatAlert(object,index,className,messageAlert,completMessageAlert)
{
    var div=document.createElement('div');
    div.classList.add('i_'+index);
    div.classList.add(className);
    div.innerHTML=messageAlert;
    div.setAttribute('title',completMessageAlert)
    object.appendChild(div);
}
function removeAlert (object,index)
{
     object.querySelector('div.i_'+index).remove();
}
