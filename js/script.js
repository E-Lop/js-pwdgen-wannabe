const userName = prompt('Dimmi il tuo nome');

const userSurname = prompt('Dimmi il tuo cognome');

const favoritecolor = prompt('Dimmi il tuo colore preferito');

const userMessage = `La tua password è ${userName}${userSurname}${favoritecolor}21`;

document.getElementById('result').innerHTML = userMessage;
