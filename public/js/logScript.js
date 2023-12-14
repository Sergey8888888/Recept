const loginForm = document.querySelector('.form-login');

if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { email, password } = event.target;
    if (email && password) {
      try {
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            email: email.value,
            password: password.value,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const body = await response.json();
        console.log(body);
        if (body.success) {
          window.location.href = '/';
        } else {
          document.querySelector('.div-log').innerHTML = 'Заполните все поля!';
        }
      } catch (error) {
        console.error(error.message);
      }
    } else {
      document.querySelector.apply('div-log').innerHTML = 'Заполните все поля!';
    }
  });
}
