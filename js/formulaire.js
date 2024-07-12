let form = document.querySelector('#form');
 
// Ecouter la modification de category
form.category.addEventListener('change', function() {
     validCategory(this);
});

// Ecouter la modification du comment
form.comment.addEventListener('change', function() {
    validComments(this);
});

// Ecouter la modification de l'email
form.email.addEventListener('change', function() {
    validEmail(this);
});



// Ecouter la soumission du formulaire
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if( validCategory(form.category) && validComment(form.comment) && validEmail(form.email)) {
       form.submit();  
    }
    
});

//**********Validation SELECT *************/
const validCategory = function(inputCategory) {
    let msg = '';
    let valid = false;

    // Vérifiez si une catégorie est sélectionnée (valeur différente de "")
    if (inputCategory.value !== '' && inputCategory.value !== 'Sélectionnez') {
        valid = true;
    } else {
        msg = 'Veuillez sélectionner un titre';
    }

    let small = inputCategory.nextElementSibling;
    if (valid) {
        small.innerHTML = ''; // Pas de message si valide
        small.classList.remove('text-danger', 'text-success');
    } else {
        small.innerHTML = msg;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
};


 //*************Validation COMMENT  *********/ 
 const validComments = function(inputComments) {
    let msg;
    let valid = false;
    let trimmedValue = inputComments.value.trim();

        // Vérifiez si les commentaires ne sont pas vides
    if (trimmedValue.length === 0) {
        msg = 'Le commentaire ne peut pas être vide';
    }
    // Vérifiez si les commentaires ont au moins 15 caractères
    else if (trimmedValue.length < 15) {
        msg = 'Le commentaire est trop court';
    }
    // Commentaire valide
    else {
        valid = true;
        msg = ''
    }

    let small = inputComments.nextElementSibling;
    if (valid) {
      small.innerHTML = msg;
      small.classList.remove('text-danger');
      small.classList.add('text-success');
    } else {
      small.innerHTML = msg;
      small.classList.remove('text-success');
      small.classList.add('text-danger');
    }
}; 

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

