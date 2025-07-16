const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "female3.png"
  }
];


// definisco la funzioni

const addCard = (member) => {

  // funzione che genera le card nel DOM

  const { name, role, email, img } = member

  const generalities = `<div>
        <div class="card mb-3 rounded-0 border-0 myBg-black">
          <div class="row g-0">
            <div class="col-4">
              <img src="./assets/img/${img}" class="img-fluid" alt="...">
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

const renderCards = (teamMembers) => {
  // ciclo gli elementi da inserire nel DOM

  for (i = 0; i < teamMembers.length; i++) {

    let card = addCard(teamMembers[i])

    cardMember.innerHTML += card

  }
}


// richiamo gli elementi del DOM

const cardMember = document.getElementById(`team-member`)
const addMember = document.getElementById(`add-member`)


// creo l'evento una volta premuto il pulsante 

addMember.addEventListener(`click`, function (e) {
  e.preventDefault()

  cardMember.innerHTML = ''

  const name = document.getElementById(`name`).value
  const role = document.getElementById(`role`).value
  const email = document.getElementById(`email`).value
  const img = document.getElementById(`img`).value

  // verifico la consistenza dei dati

  if (name == '' || role == '' || email == '' || img == '') {
    alert(`Tutti i campi sono obbligatori!!!`)
    return
  }

  // creo e aggiungo il nuovo oggetto

  const newMember = {
    name,
    role,
    email,
    img
  }

  teamMembers.push(newMember)

  // dopo il pusch svuoto i campi della from

  document.getElementById(`name`).value = ''
  document.getElementById(`role`).value = ''
  document.getElementById(`email`).value = ''
  document.getElementById(`img`).value = ''

  renderCards(teamMembers)

})

renderCards(teamMembers)

