let signed = false;

let existUser = localStorage.getItem("@Ticket");

if (existUser) {
  signed = true;
}

if (!signed) {
  window.location.href = "../login/index.html";
}

// VERIFY USER SIGNED

if (existUser) {
  const user = JSON.parse(existUser);
  
  if (!user.name) {
    user.name = 'Perfil';
  }

  const userName = document.querySelector('.username');

  userName.innerText = !user ? '' : user.name;

}