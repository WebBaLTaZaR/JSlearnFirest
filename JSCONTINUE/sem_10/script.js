'use strict';
const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', `<div class = 'divData'></div>`);
const parseObj = JSON.parse(data);
const divData = document.querySelector('.divData')
parseObj.message.forEach(element => {
	divData.insertAdjacentHTML('beforeend', `
		<figure>
  <img src="${element}" alt="Elephant at sunset" />
  <figcaption>Это бобака! </figcaption>
</figure>
		`)
});
const url = 'https://jsonplaceholder.typicode.com/users';
async function getData(url) {
	const response = await fetch(url);
	const json = await response.json();
	return json;
}
try {
	const myData = await getData(url)
	console.log(myData);
	
	myData.forEach(element => {
		divData.insertAdjacentHTML('beforeend',`
			<ul>Имя: ${element.name}, а электронный адрес: ${element.email}</ul>
			`)
	});
} catch (error) {
	console.log(`Ошибка ${error.message}`);
}