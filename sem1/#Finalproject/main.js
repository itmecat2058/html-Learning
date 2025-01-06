let filteredProducts = [...products]
const productsContainer = document.querySelector(".notSidebar")
const searchForm = document.querySelector(".searchForm")
const searchInput = document.querySelector(".searchInput")

searchForm.addEventListener("keyup", () => {
    let searchTerm = searchInput.value.toLowerCase();
    filteredProducts = products.filter(product => {
        return product.title.includes(searchTerm)
    })
    showProd()
})

function showProd() {
    productsContainer.innerHTML = filteredProducts.map(product => {
        return `
                <article class="product">
                    <img src="${product.image}" alt="${product.title}" class="productImage">
                    <footer>
                        <p class="productName">${product.title}</p>
                        <p class="productPrice">${product.price}</p>
                        <button class="btn">Add to Cart</button>
                    </footer>
                </article>
                `
    }).join("")
}

showProd()