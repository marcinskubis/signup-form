let submitButton = document.querySelector('#submit-button');

let alert = document.querySelector('#alert');

let form = document.getElementById('myform');

form.addEventListener("submit", function(event){
    event.preventDefault();

    let password = document.querySelector('#pwd').value;
    let passwordConfirmation = document.querySelector('#pwdconf').value;
    console.log(password);
    console.log(passwordConfirmation);
    if(password === passwordConfirmation){
        this.submit();
    }else{
        alert.innerHTML = 'Passwords do not match!';
        setTimeout(function() {
            alert.innerHTML = '';
        }, 3000);
    }
});

