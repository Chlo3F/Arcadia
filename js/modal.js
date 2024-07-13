let form = document.querySelector('#modalForm');

// Ecouter la modification du pseudo
form.pseudo.addEventListener('change', function() {
    validPseudo(this);
});


// Ecouter la modification du comment
form.comment.addEventListener('change', function() {
    validComments(this);
});


// Ecouter la soumission du formulaire
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if( validPseudo(form.pseudo) && validComment(form.comment)) {
        form.submit();  
    }
    
});


//*************Validation PSEUDO  *********/ 
const validPseudo = function(inputPseudo) {
    let msg;
    let valid = false;
    let trimmedValue = inputPseudo.value.trim();

        // Vérifiez si les pseudo ne sont pas vides
    if (trimmedValue.length === 0) {
        msg = 'Veuillez choisir un pseudo';
    }
    // Vérifiez si les pseudo ont au moins 3 caractères
    else if (trimmedValue.length < 3) {
        msg = 'Le pseudo est trop court';
    }
    // Pseudo valide
    else {
        valid = true;
        msg = ''
    }

    let small = inputPseudo.nextElementSibling;
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
