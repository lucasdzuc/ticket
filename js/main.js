const signed = false;

const existUser = localStorage.getItem("Acesso");

if(existUser){
  signed = true;
}

if(!signed){
  window.location.href = "../login/index.html";
}