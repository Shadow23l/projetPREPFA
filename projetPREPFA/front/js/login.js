document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const submitMessage = document.getElementById('submitMessage');

  function clearErrors() {
    emailError.textContent = '';
    passwordError.textContent = '';
    submitMessage.textContent = '';
  }

  function validate() {
    let ok = true;
    clearErrors();

    if (!email.value) {
      emailError.textContent = 'Veuillez renseigner votre e‑mail.';
      ok = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      emailError.textContent = 'Format d\'e‑mail invalide.';
      ok = false;
    }

    if (!password.value) {
      passwordError.textContent = 'Veuillez saisir votre mot de passe.';
      ok = false;
    } else if (password.value.length < 6) {
      passwordError.textContent = 'Le mot de passe doit contenir au moins 6 caractères.';
      ok = false;
    }

    return ok;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      email: email.value.trim(),
      password: password.value,
      remember: document.getElementById('remember').checked,
    };

    submitMessage.textContent = 'Connexion en cours...';

    // NOTE: Replace the following mock with a real fetch to your backend endpoint, e.g.:
    // fetch('/api/login', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload) })...

    // Mock async request
    setTimeout(() => {
      // Fake success: if email contains "ok" then success, otherwise simulate error
      if (payload.email.includes('ok')) {
        submitMessage.textContent = 'Connecté avec succès — redirection...';
        submitMessage.style.color = '';
        // perform real redirect if needed, e.g. window.location = '/dashboard'
      } else {
        submitMessage.textContent = 'Echec de la connexion : identifiants invalides.';
        submitMessage.style.color = '#e11d48';
      }
    }, 900);
  });
});
