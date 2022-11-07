function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Liaison des labels
const prenom = document.getElementById("first");
const nom =  document.getElementById("last");
const mail =  document.getElementById("email");
const naissance = document.getElementById("birth");
const nombreTournois = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 =  document.getElementById("location2");
const location3 =  document.getElementById("location3");
const location4 =  document.getElementById("location4");
const location5 =  document.getElementById("location5");
const location6 =  document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

// Liaison des textes d'erreurs sous les champs
const prenom_e = document.getElementById("prenom_erreur");
const nom_e = document.getElementById("nom_erreur");
const email_e = document.getElementById("email_erreur");
const naissance_e = document.getElementById("birthdate_erreur");
const nombreTournois_e = document.getElementById("quantity_erreur");
const localisation_e = document.getElementById("localisation_erreur");
const condition_e = document.getElementById("condition_erreur");

// Regex de vérification du mail, prénom, nom, nombre tournoi et naissance.
var mailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var prenomValidation = /^[a-zA-Zéèîï][a-zéèêàçîï]+([-'\s][a-zA-Zéèîï][a-zéèêàçîï]+)?/;
var nomValidation = /^[a-zA-Zéèîï][a-zéèêàçîï]+([-'\s][a-zA-Zéèîï][a-zéèêàçîï]+)?/;
var tournoisValidation =/^[0-9][0-9]?$|^999$/;
var naissanceValidation = /^([0-9]{2})|([0-9]{2})|([0-9]{4})$/;


// Liaison des id du bouton de validation et du message de validation
const validation = document.getElementById("btn_envoyer");
const validation_fin = document.getElementById("validation_fin");



// Fonction de validation du formulaire
// Vérification de chaques éléments avec récupération de la valeur des labels
// Renvoie du message d'erreur dans le champ correspondant au test (ex: prénom dans prénom_erreur).
// Sinon, Renvoie un message passe par vérification du regex correspondant au test (ex: prénom par prenomVerification).
// En cas d'aucune erreur de total validité, laisse le champ d'erreur sous le champ correspondant vide.

function validate () {

  // Vérification du prénom entrée en retirant les espaces vides + la taille de l'entrée
  if (prenom.value.trim() === '' || prenom.value.length< 2)
  {
    prenom_e.innerHTML = "Veuillez remplir le champ nom avec 2 caractères minimum.";
    prenom_e.style.fontSize = "14px";
    prenom_e.style.color = "red";
    prenom.innerHTML = document.getElementById(prenom);
  }
    else if(prenomValidation.test(prenom.value.trim()) == false) {
      prenom_e.innerHTML  = "Veuillez entrez un prénom correct.";
      prenom_e.style.fontSize = "14px";
      prenom_e.style.color="red";
      prenom.innerHTML = document.getElementById(prenom);
    }
    else {
      prenom_e.innerHTML = "";
    }

    // Vérification du nom entrée en retirant les espaces vides + la taille de l'entrée
  if (nom.value.trim() === '' || nom.value.length < 2)
  {
    nom_e.innerHTML = "Veuillez remplir le champ nom avec 2 caractères minimum.";
    nom_e.style.fontSize = "14px";
    nom_e.style.color = "red";
    nom.innerHTML = document.getElementById(nom);
  }
    else if(nomValidation.test(nom.value.trim()) == false) {
      nom_e.innerHTML  = "Veuillez entrez un nom correct ";
      nom_e.style.fontSize = "14px";
      nom_e.style.color="red";
      nom.innerHTML = document.getElementById(nom);
    }
    else {
      nom_e.innerHTML = "";
    }

    // Vérification de la date de naissance entrée + vérification avec le regex (caractères numériques)
  if (naissance.value === '' || (naissanceValidation.test(naissance.value) == false)) {
    naissance_e.innerHTML = "Veuillez entrez votre date de naissance.";
    naissance_e.style.fontSize = "14px";
    naissance_e.style.color = "red";
    naissance.innerHTML = document.getElementById(naissance);
  }
    else {
      naissance_e.innerHTML = "";
    }

    // Vérification nombre de tournois participés + vérification avec le regex (caractères numériques)
  if (nombreTournois.value === '' || tournoisValidation.test(nombreTournois.value) == false) {
    nombreTournois_e.innerHTML = "Veuillez entrer le nombre de tournois participé.";
    nombreTournois_e.style.fontSize = "14px";
    nombreTournois_e.style.color = "red";
    nombreTournois.innerHTML = document.getElementById(nombreTournois);
  }
    else {
      nombreTournois_e.innerHTML = "";
    }

    // Vérification du mail entrée via le regex de mail (RFC-5322)
  if (mailregex.test(mail.value) == true) {
    email_e.innerHTML = "";
  }
    else {
      email_e.innerHTML = "Veuillez entrer un email correct.";
      email_e.style.fontSize = "14px";
      email_e.style.color = "red";
      mail.innerHTML = document.getElementById(mail);
    }

    // Vérification du check de minimum 1 ville du tournoi
  if ((location1.checked)|| (location2.checked) || (location3.checked)
    ||(location4.checked) ||(location5.checked) ||(location6.checked)) {
    localisation_e.innerHTML = "";
  }
    else {
      localisation_e.innerHTML = "Vous devez choisir une option.";
      localisation_e.style.fontSize = "14px"; 
      localisation_e.style.color = "red";
    }	

    // Vérification du check de validation des termes et conditions
  if (checkbox1.checked) {
    condition_e.innerHTML = "";
  }
    else {
      condition_e.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
      condition_e.style.fontSize = "14px";
      condition_e.style.color = "red";
    }

// Si toutes les valeurs sont vérifiés et true, renvoie un message sous le bouton de validation, via validation_fin.

  if (prenom.value && nom.value && naissance.value &&
    nombreTournois.value && mail.value && ((location1.checked)|| 
    (location2.checked) || (location3.checked)||(location4.checked) ||
    (location5.checked) ||(location6.checked)) && checkbox1.checked === true)
    {
      validation_fin.innerHTML= "Merci ! Votre réservation a bien été reçue.";
      validation_fin.style.fontSize = "16px";
    }  
}

// Elements du DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closemodalbg = document.querySelector(".close");

// Pour chaque click sur un bouton "Btn" -> Fonction launchModal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Event de click sur le bouton du formulaire -> Fonction de validation du formulaire
validation.addEventListener("click",validate); 

// Fermeture du formulaire d'inscription par click sur le X en haut à droite -> Fonction closeModalButton
closemodalbg.addEventListener("click", closeModalButton);

// Fonction d'affichage et de fermeture de l'interface d'inscription via un style.display = block ou none.
function launchModal() {
  modalbg.style.display = "block";
}
function closeModalButton() {
  modalbg.style.display = "none";
  validation_fin.innerHTML = "";
}

