// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!
//////////////////////////////////
/////////////////////////////////
// milestone 0
const membersTeamName = [
  "Wayne",
  "Angela",
  "Walter",
  "Angela",
  "Scott",
  "Barbara",
];
const membersTeamSurname = [
  "Barnett",
  "Caroll",
  "Gordon",
  "Lopez",
  "Estrada",
  "Ramos",
];
const membersTeamRole = [
  "Founder & Ceo",
  "Chief Editor",
  "Office Manager",
  "Social Media Manager ",
  "Developer",
  "Graphic Designer",
];
const membersTeamPhoto = [
  "wayne-barnett-founder-ceo.jpg",
  "angela-caroll-chief-editor.jpg",
  "walter-gordon-office-manager.jpg",
  "angela-lopez-social-media-manager.jpg",
  "scott-estrada-developer.jpg",
  "barbara-ramos-graphic-designer.jpg",
];
////////////////////////
// milestone 1, stampare in console.log "prima variante"
////////////////////////
const membersArray = [
  {
    name: "Wayne",
    lastname: "Barnett",
    role: "Founder & Ceo",
    photo: "wayne-barnett-founder-ceo.jpg",
  },

  {
    name: "Angela",
    lastname: "Caroll",
    role: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter",
    lastname: "Gordon",
    role: "Office Manager",
    photo: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela",
    lastname: "Lopez",
    role: "Social Media Manafer",
    photo: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott",
    lastname: "Estrada",
    role: "Developer",
    photo: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara",
    lastname: "Ramos",
    role: "Graphic Desiner",
    photo: "barbara-ramos-graphic-designer.jpg",
  },
];
console.log(membersArray);
/////////////////////////////
// milestone 1 "seconda variante"
////////////////////////////
// const membersArray = [
//   firstMembersTeam,
//   secondMembersTeam,
//   thirdMembersTeam,
//   fourthMembersTeam,
//   fifthMembersTeam,
//   sixthMembersTeam,
// ];
// console.log(
//   membersArray[0].name,
//   membersArray[0].lastname,
//   membersArray[0].role,
//   membersArray[0].photo
// );
// console.log(
//   membersArray[1].name,
//   membersArray[1].lastname,
//   membersArray[1].role,
//   membersArray[1].photo
// );
// console.log(
//   membersArray[2].name,
//   membersArray[2].lastname,
//   membersArray[2].role,
//   membersArray[2].photo
// );
// console.log(
//   membersArray[3].name,
//   membersArray[3].lastname,
//   membersArray[3].role,
//   membersArray[3].photo
// );
// console.log(
//   membersArray[4].name,
//   membersArray[4].lastname,
//   membersArray[4].role,
//   membersArray[4].photo
// );
// console.log(
//   membersArray[5].name,
//   membersArray[5].lastname,
//   membersArray[5].role,
//   membersArray[5].photo
// );
