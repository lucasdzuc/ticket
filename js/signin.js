const form = document.forms.singnin;

form.addEventListener('submit', event => {
  event.preventDefault();

  let user;
  let data = null;

  const { email, password } = form;
  // console.log(email.value, password.value);

  // const User = { email: email.value, password: password.value };

  // if(!email.value) {
  //   const email = document.getElementById('email');
  //   email.classList.toggle('isError');
  //   const isError = email.classList.contains('isError');
  //   event.currentTarget.setAttribute('aria-expanded', isError);
  // } else {
  //   event.currentTarget.removeAttribute("class");
  // }

  // if(!password.value) {
  //   const password = document.getElementById('password');
  //   password.classList.toggle('isError');
  //   const isError = password.classList.contains('isError');
  //   event.currentTarget.setAttribute('aria-expanded', isError);
  // } else {
  //   event.currentTarget.removeAttribute("class");
  // }

  // VALIDANDO FORMULÁRIO


  // BUSCAR USUÁRIOS DO LOCAL STORAGE

  const users = localStorage.getItem("@TicketRegister");
  const getUser = JSON.parse(users);

  if(!users){
    console.log("Não existe usuários na base de dados!");
  }

  for(user of getUser){
    // console.log(user.email);  
    if(user.email === email.value) data = user;

    if(!user.email === email.value) data = null;
  }

  if(data == null){
    alert("Endereço de e-mail ou senha inválido!");
  }

  if(data.password === password.value){
    // console.log("Logado!");
    user = { id: data.id, name: data.name, email: data.email }
    localStorage.setItem("@Ticket", JSON.stringify(user));
    window.location.href = "../profile/index.html";
  } else {
    alert("E-mail ou senha inválido!");
  }

});