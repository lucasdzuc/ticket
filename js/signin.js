const form = document.forms.singnin;

form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, password } = form;
  console.log(email.value, password.value);

  const User = { email: email.value, password: password.value };

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

  // BUSCAR USUÁRIS DO LOCAL STORAGE

  // const users = localStorage.getItem("@TicketRegister");

  if(email.value == "lucas@admin.com" && password.value == "123"){
    localStorage.setItem("@Ticket", JSON.stringify(User));

    window.location.href = "../profile/index.html";
  }

});