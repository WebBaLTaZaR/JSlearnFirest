'use strict';

const bodyEl = document.querySelector('body');
bodyEl.insertAdjacentHTML('afterbegin', `
	<div class = "factsWrap">
	<h1 class = "facts"></h1>
	</div>`);
const factsEl = document.querySelector('.facts');
const urlCats = `https://catfact.ninja/fact`;
async function getData(urlCats) {
	const response = await fetch(urlCats);
	const json = await response.json();
	return json;
}
const myData = await getData(urlCats);
try {
	factsEl.textContent = `факт про кошек: ${myData.fact}`;
} catch (error) {
	console.log(`перехвачена ошибка ${error}`);
}

// 2 задание ======================================================================
const factsWrapEl = document.querySelector('.factsWrap')
factsWrapEl.insertAdjacentHTML('afterend', `<div class = "divPhotos"></div>`);
const divPhotos = document.querySelector('.divPhotos');

const urlPhotos = `https://api.slingacademy.com/v1/sample-data/photos`;

const myDataPhotos = await getData(urlPhotos);
try {
	console.log(myDataPhotos);
	myDataPhotos.photos.forEach((element) => {
		divPhotos.insertAdjacentHTML('beforeend', `<div><img  src = ${element.url}></img><h3>${element.title}</h3><p>${element.description}</p></div>`)
		
	});
	
} catch (error) {
	console.log(`перехвачена ошибка ${error}`);
}