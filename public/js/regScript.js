const regaForm = document.querySelector('.form-reg');

if (regaForm) {
  regaForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { name, email, password } = event.target;
    if (name && email && password) {
      try {
        const response = await fetch('/api/auth/registration', {
          method: 'POST',
          body: JSON.stringify({
            name: name.value,
            email: email.value,
            password: password.value,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const body = await response.json();
        if (body.success) {
          window.location.href = '/auth/login';
        } else {
          document.querySelector('.div-reg').innerHTML = body.message;
        }
      } catch (error) {
        console.error(error.message);
      }
    } else {
      alert('Заполните все поля!');
    }
  });
}
