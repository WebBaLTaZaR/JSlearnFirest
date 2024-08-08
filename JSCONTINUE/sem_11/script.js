'use strict';
const cardsEl = document.querySelector('.cards');
console.log(dataProducts.cards[0].discription);

dataProducts.cards.forEach(element =>{
	cardsEl.insertAdjacentHTML('beforeend', `
		<div class="cardWrap">
        <div class="imgWrap">
          <img class="imgCard" src="${element.url}" alt="${element.id}" />
        </div>
        <div class="discriptionWrap">
          <div class="titleItem">${element.discription}</div>
          <div class="priceItem">Price:<span class="price"> $${element.price}</span></div>
          <div class="colorItem">Color: <span class="color"> ${element.color}</span></div>
          <div class="sizeItem">Size: <size class="size"> ${element.size}</size></div>
          <div class="quantityItem">
            Quantity: <span class="quantity"> ${element.quantity}</span>
          </div>
        </div>
        <div class="close">
          <img
            src="/JSlearnFirest/JSCONTINUE/sem_11/img/close.svg"
            alt="close"
          />
        </div>
      </div>
		`)
})