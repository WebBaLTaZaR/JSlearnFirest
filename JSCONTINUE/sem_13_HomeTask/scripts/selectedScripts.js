'use strict';
const cardsEl = document.querySelector('.cards');

window.addEventListener('DOMContentLoaded', () => {
  let storageProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
  storageProducts.forEach (product => {
    cardsEl.insertAdjacentHTML('beforeend', `
      <div class="cardWrap" data-id = "${product.id}">
          <div class="imgWrap">
            <img src="${product.url}" alt="${product.id}" />
          </div>
          <div class="discriptionWrap">
            <div class="titleItem">${product.name}</div>
            <div class="priceItem">Price:<span class="price"> $${product.price}</span></div>
            <div class="colorItem">Color: <span class="color"> ${product.color}</span></div>
            <div class="sizeItem">Size: <size class="size"> ${product.size}</size></div>
            <div class="quantityItem">
              Quantity: <span class="quantity"> ${product.quantity}</span>
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
  const closedEl = document.querySelectorAll('.close')
  closedEl.forEach(button => {
    button.addEventListener('click', function(){
      const parentCardItem = this.closest('.cardWrap');
      parentCardItem.remove();
      let storageProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
      const productId = parentCardItem.getAttribute('data-id');
      storageProducts = storageProducts.filter(product => product.id != productId);
      localStorage.setItem('selectedProducts', JSON.stringify(storageProducts));
    })
  });
  });
