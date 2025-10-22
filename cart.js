const intialCart = `
    <h3>Cart</h3>
    <ul>      
    </ul>
    <p class="total"></p>
  `;

export function addToCart(target) {
  const $product = target.parentElement;

  // if the cart has never been created
  if (!document.querySelector('#cart').children.length) {
    document.querySelector('#cart').innerHTML = intialCart;
  }

  // add item
  document.querySelector('#cart ul').insertAdjacentHTML("beforeend", `
    <li>
      ${$product.querySelector('.name').textContent} <span class="price">${$product.querySelector('.price').textContent}</span> <button onclick="removeFromCart(this)">x</button>
    </li >
  `);

  updateTotal();
}

window.removeFromCart = function (target) {
  const $item = target.parentElement;
  $item.remove();
  updateTotal();
};

function updateTotal() {
  let total = 0;
  document.querySelectorAll('#cart li').forEach(function (el) {
    total += parseInt(el.querySelector('.price').textContent);
  });
  document.querySelector('#cart .total').innerHTML = `Total: <span>${total}</span>kr`;
}



