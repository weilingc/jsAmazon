
// 1. 取得data
// 2. 創造 html
// 3. 互動

let productsGrid = document.querySelector('.products-grid')
let productsHtml = ''

products.forEach(function(product, index){
  let {id, image, name, rating, priceCents, keywords} = product

  let productContainer = `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${name}
      </div>

        <img class="product-rating-stars"
          src="images/ratings/rating-45.png">
        <div class="product-rating-count link-primary">
          56
        </div>


      <div class="product-price">
        ${priceCents}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary">
        Add to Cart
      </button>
    </div>
  `
  productsHtml += productContainer
})

productsGrid.innerHTML = productsHtml



