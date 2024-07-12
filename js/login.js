let form = document.querySelector('#loginForm');
 
// Ecouter la modification de l'email
form.email.addEventListener('change', function() {
    validEmail(this);
});

// Ecouter la modification du password
form.password.addEventListener('change', function() {
    validPassword(this);
});

// Ecouter la soumission du formulaire
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if( validEmail(form.email) && validPassword(form.password)) {
       form.submit();  
    }
    
});

//*********Validation EMAIL ************** 
const validEmail = function(inputEmail) {
    //Creation de la reg exp pour la validation email
    let emailRegExp = new RegExp (
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
    );

    // Récupération de la balise SMALL
    let small = inputEmail.nextElementSibling;

      //Test de l'expression régulière
    if(emailRegExp.test(inputEmail.value)){
        small.innerHTML = 'Adresse Valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    } 
    else{
        small.innerHTML = 'Adresse Non Valide';
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
};


//*********Validation PASSWORD ************** 
const validPassword = function(inputPassword) {
    let msg;
    let valid = false;
    //Au moins 8 caractères
    if (inputPassword.value.length <8){
        msg='Le mot de passe doit contenir au moins 8 caractères';
    }
    //Au moins 1 maj
    else if (!/[A-Z]/.test(inputPassword.value)) {
        msg='Le mot de passe doit contenir au moins 1 Majuscule';
    }
    //Au moins 1 chiffre
    else if (!/[0-9]/.test(inputPassword.value)) {
        msg='Le mot de passe doit contenir au moins 1 chiffre';
    }
    //Mot de passe valide
    else {
        msg = 'Le mot de passe est valide'
        valid = true
    }
   
    
     // Récupération de la balise SMALL
     let small = inputPassword.nextElementSibling;

     //Test de l'expression régulière
   if(valid){
       small.innerHTML = 'Mot de passe Valide';
       small.classList.remove('text-danger');
       small.classList.add('text-success');
       return true;
   } 
   else{
       small.innerHTML = msg;
       small.classList.remove('text-success');
       small.classList.add('text-danger');
       return false;
   }
};
