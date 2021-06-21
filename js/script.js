var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// VERIFY USER SIGNED

let existUser = localStorage.getItem("@Ticket");

if (existUser) {
  const user = JSON.parse(existUser);

  if (!user.name) {
    user.name = 'Perfil';
  }

  const classUser = document.querySelector('.login');

  classUser.style.background = "#FFF";
  classUser.style.color = "#ff0019"
  classUser.href = "./pages/profile/index.html";
  classUser.innerText = user.name

}
