// Script pour afficher un message lors de l'achat
const buttons = document.querySelectorAll('.acheter');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Merci pour votre achat ! Nous vous contacterons bientôt.');
  });
});

// Script pour le formulaire de contact
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Merci, ${nom}. Votre message a été envoyé avec succès.`);
  form.reset();
});