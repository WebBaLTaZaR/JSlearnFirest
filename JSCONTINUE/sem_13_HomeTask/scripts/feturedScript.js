'use strict';
const feturedCardsEl = document.querySelector('.feturedCards');

dataProducts.cards.forEach(element => {
	feturedCardsEl.insertAdjacentHTML('beforeend', `
		<div class="cardItem" data-id="${element.id}">
  <div class="imgWrap">
    <img class="imgCard" src="${element.url}" alt="${element.id}">
    <button class="cardButtonShow">
      <img src="img/basket.svg" alt="Basket Icon">Add to Cart
    </button>
  </div>
  <div class="wrapDescrip">
    <h3 class="cardHeadText">${element.name}</h3>
    <p class="cardDescription">${element.discription}</p>
    <div class="price">$${element.price}</div>
  </div>
</div>
		`)
});

const sendButton = document.querySelectorAll('.cardButtonShow');
sendButton.forEach(element => {
  element.addEventListener('click', function(){
    const parentCardItem = this.closest('.cardItem');
    const parentId = parentCardItem.getAttribute('data-id');
    const product = dataProducts.cards.find(item =>item.id == parentId)
    let selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    selectedProducts.push(product);
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));

  })
});
