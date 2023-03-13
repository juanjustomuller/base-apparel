//cuando el usuario haga click en el boton, consultemos
//si el email es correcto, cuando no lo sea sale el error
//llamado al formulario, al input, y al error para mostrarlo u ocultarlo

const form = document.querySelector('.container__content__form');
const inputEmail = document.querySelector('.container__content__form__email');
const error = document.querySelector('.container__content__form__email--error');

//escucha al formulario
//si no pongo nada entre los parentesis de la arrow function se genera un refresh de la pag por default
//para q eso no pase, tengo que almacenar el submit en una variable, en los () de la arrow function pongo event y luego al evento le pongo un preventdefault
//ahora necesito que me valide lo q el usuario pone en el formulario

form.addEventListener('submit', (event)=>{
    //event.preventDefault();
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g; 
    //expresion regular, se transforma en un objeto, todo el codigo de validacion lo puedo sacar de la pagina regexr.com (tiene un banco de expresiones regulares para hacer validaciones)
    //console.log(regExp.test(inputEmail.value)); //aca me da un true o un false

    if(regExp.test(inputEmail.value) == true){
        inputEmail.style.border = '1px solid hsl(0, 36%, 70%)';
        inputEmail.style.backgroundImage = 'url("")';
        error.innerHTML = '';
    }else{
        event.preventDefault();
        inputEmail.style.border = '1px solid red';
        inputEmail.style.backgroundImage = 'url("./images/icon-error.svg")';
        error.innerHTML = 'Please provide a vaild email';
    }
});