const productContainer = document.getElementById("productContainer");

for (const product of products) {
  const productDiv = document.createElement("Div");
  productDiv.innerHTML = ` 
  <div class="relative flex w-full h-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div
      class="relative mx-4 -mt-6 h-52 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
      <img src="${product.image}"
          alt="img-blur-shadow" layout="fill" class="h-full w-full" />
  </div>
  <div class="p-6">
      <h5
          class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          ${product.name}
      </h5>
      
      <div>
          <span><del>399</del>TK.</span>
          <span class="ml-3">299TK.</span>
      </div>

      <div class="rating">rating - ${product.rating}</div>

  </div>
  <div class="p-6 pt-0">
      <button
  
      onclick = "addToCart(${product.id})"
          class="select-none rounded-lg bg-gradient-to-r to-emerald-600 from-sky-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button" data-ripple-light="true">
          Add to cart
      </button>
  </div>
</div>
`;
  productContainer.appendChild(productDiv);
}

let cartProduct = [];
let totalPrice = 0;
function addToCart(id) {
  const cartContainer = document.getElementById("cartContainer");
  cartContainer.innerHTML = "";
  totalPrice = 0;
  const product = products.find((el) => el.id === id);
  cartProduct.push(product);
  for (let i = 0; i < cartProduct.length; i++) {
    const carProd = cartProduct[i];
    const createDiv = document.createElement("div");
    totalPrice = totalPrice + carProd.discountPrice;

    createDiv.innerHTML = `
    <span class="mt-3">${i + 1}</p>
        <span class="mt-3">${carProd.name}</p>
        <p>Price : ${carProd.discountPrice}</p>
        <hr class = "mt-3 mb-3"/>
        `;
    cartContainer.appendChild(createDiv);
  }
  const totalDisplay = document.getElementById("totalPriceDisplay");
  totalDisplay.innerHTML = `<h1 id="totalPriceDisplay" class="text-md text-center font-extrabold text-gray-900 dark:text-white">
  <span class="text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-red-400">Total Price : ${totalPrice}
  </span>
</h1>`;
}
