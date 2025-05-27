const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //.name para seleccionar correctamente la clase
const $b = document.querySelector('.blog'); //.blog para seleccionar correctamente la clase
const $l = document.querySelector('.location'); //integrarlo en el html

async function displayUser(username) { //await debe usarse dentro de una función async
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //convertir json
  console.log(data);
  $n.textContent = `${data.name}`; //comillas inversas
  $b.textContent = `${data.blog}`; //comillas inversas
  $l.textContent = `${data.location}`; //comillas inversas
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` //usar $n 
}

displayUser('stolinski').catch(handleError);