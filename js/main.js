let signed = false;

let existUser = localStorage.getItem("@Ticket");

if(existUser){
  signed = true;
}

if(!signed){
  window.location.href = "../login/index.html";
}