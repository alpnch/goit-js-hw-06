
const form = document.querySelector('.login-form')
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;
  const formData = { email, password };
  if (email && password) {
    console.log(formData)
      } else {
      alert('Please complete all fields')
  }
})