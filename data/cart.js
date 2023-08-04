export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = []
}


function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(productId) {
  let matchItem;
  cart.forEach((cartItem)=>{
    if (productId === cartItem.productId) {
      matchItem = cartItem
    }
  })

  if (matchItem) {
    matchItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
  saveToStorage();
  console.log(cart)
  console.log(localStorage)
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem)
    }
  })

  cart = newCart;

  saveToStorage();
}

// function upd
