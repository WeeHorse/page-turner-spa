const intialCart = `
    <h3>Cart</h3>
    <ul>      
    </ul>
    <p class="total"></p>
  `

export function addToCart(target) {
  const $product = $(target.parentElement)

  // if the cart has never been created
  if (!$('#cart').children().length) {
    $('#cart').html(intialCart)
  }

  // add item
  $('#cart ul').append(`
    <li>
      ${$product.children('.name').text()} <span class="price">${$product.find('.price').text()}</span>kr
    </li >
  `)

  updateTotal()
}

function updateTotal() {
  let total = 0
  $('#cart li').each(function () {
    total += parseInt($(this).children('.price').text())
  })
  $('#cart .total').html(`Total: <span>${total}</span>kr`)
}



