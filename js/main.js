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

// LIST TICKETS

const listTickets = [
  {
    id: "1",
    remetente: "Tost",
    ticket: "ticket.com/384098",
    received: "22/06/2021",
    expire: "30/06/2021",
    expired: false,
    used: false
  },
  {
    id: "2",
    remetente: "Nandi",
    ticket: "ticket.com/8401849",
    received: "23/06/2021",
    expire: "15/07/2021",
    expired: false,
    used: true
  },
  {
    id: "3",
    remetente: "Raian",
    ticket: "ticket.com/78957423",
    received: "20/06/2021",
    expire: "23/06/2021",
    expired: true,
    used: false
  }
]

// let text = "";

const list = listTickets.map(item => {
  return (
    `<li>
    <h4>${item.remetente}</h4>
    <a href="" class="ticket-link">${item.ticket}</a>
    <h4 class="received">${item.received}</h4>
    <h4 class="expires">expira em ${item.expire}</h4>
    <button class="copy-button">
      <i class="bi bi-clipboard"></i>
    </button>
    </li>`
  )
});

// text + "</ul>"

document.getElementById("demo").innerHTML = list.join(' ');

// function functionList(value, index){
//   return (
//     text += "<li>" + value + "</li>"
//   );
// }
