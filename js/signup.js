const form = document.forms.singup;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { email, password } = form;
  console.log(email.value, password.value);

  if(!email.value) {
    const email = document.getElementById('email');
    email.classList.toggle('isError');
    const isError = email.classList.contains('isError');
    event.currentTarget.setAttribute('aria-expanded', isError);
  } else {
    event.currentTarget.removeAttribute("class");
  }

  if(!password.value) {
    const password = document.getElementById('password');
    password.classList.toggle('isError');
    const isError = password.classList.contains('isError');
    event.currentTarget.setAttribute('aria-expanded', isError);
  } else {
    event.currentTarget.removeAttribute("class");
  }

  if(email.value == "lucas@admin.com" && password.value == "123"){
    localStorage.setItem("Acesso", true);

    window.location.href = "../profile/index.html";
  }

});