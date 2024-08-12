'use strict';
const feturedCardsEl = document.querySelector('.feturedCards');

dataProducts.cards.forEach(element => {
	feturedCardsEl.insertAdjacentHTML('beforeend', `
		<div class="cardItem">
          <div class="imgWrap"><img src="${element.url}" alt="${element.id}" /></div>
          <h3 class="cardHeadText">${element.name}</h3>
          <p class="cardDescription">${element.discription}
          </p>
          <div class="price">$${element.price}</div>
        </div>
		`)
});