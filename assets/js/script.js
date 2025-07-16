const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// definisco la funzione che mi genera le card

const addCard = (member) => {

  const { name, role, email, img } = member

  const generalities = `<div>
        <div class="card mb-3 rounded-0 border-0 myBg-black">
          <div class="row g-0">
            <div class="col-4">
              <img src="./assets/${img}" class="img-fluid" alt="...">
            </div>
            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title text-white">${name}</h5>
                <p class="card-text text-secondary">${role}</p>
                <p class="card-text text-info">${email}</p>
              </div>
            </div>
          </div>
        </div>`

  return generalities
}

// richiamo gli elementi del DOM

const cardMember = document.getElementById(`team-member`)



// ciclo gli elementi da inserire nel DOM

for (i = 0; i < teamMembers.length; i++) {

  let card = addCard(teamMembers[i])

  cardMember.innerHTML += card

}
