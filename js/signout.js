function signout(){

  var pressed = confirm("Pressione Ok para sair");
  
  if (pressed == true) {
    localStorage.removeItem("Acesso");
    window.location.href = "../login/index.html";
  }
    
}