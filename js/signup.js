// let form = document.forms.register;

function validateEmail(email) {
  const regexEmail = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;

  if(regexEmail.test(email.value)){
    return true;
  } else {
    return false;
  }
}

let Users = [];

const form = document.forms.register;

form.addEventListener("submit", event => {
  event.preventDefault();

  // let field = event.target;d

  let { name, email, password, confirm_password } = form;

  // console.log(name.value, email.value, password.value, confirm_password.value);
  
  // validateEmail(email);

  if(!validateEmail(email)){
    // field.style.borderColor = "#ff6f00"
    const email = document.getElementById('email');
    email.classList.toggle('isError');
    const isError = email.classList.contains('isError');
    event.currentTarget.setAttribute('aria-expanded', isError);
  } else {
    event.currentTarget.removeAttribute("class");
  }

  if(password.value != confirm_password.value){
    alert("As senhas não são iguais");
  }

  const user = { id: uuidv4(), name: name.value, email: email.value, password: password.value };

  // console.log(User);

  const registers = localStorage.getItem("@TicketRegister");

  if(registers == null){
    Users.push(user);
    localStorage.setItem("@TicketRegister", JSON.stringify(Users));
    resetForm();
  }

  const registersObj = JSON.parse(registers);

  Users.push(...registersObj, user);

  localStorage.setItem("@TicketRegister", JSON.stringify(Users));

  resetForm();
  
});

function resetForm(){
  form.reset();
}