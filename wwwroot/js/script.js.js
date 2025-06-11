document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const confirmation = document.getElementById('confirmation');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Vous pouvez ajouter ici une validation ou un envoi à un serveur

    form.reset();
    confirmation.classList.remove('hidden');

    // Masquer le message après 5 secondes
    setTimeout(() => {
      confirmation.classList.add('hidden');
    }, 5000);
  });
});
