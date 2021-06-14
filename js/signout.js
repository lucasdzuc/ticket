function signout(){

  var pressed = confirm("Pressione Ok para sair");
  
  if (pressed == true) {
    localStorage.removeItem("@Ticket");
    window.location.href = "../login/index.html";
  }
    
}