let filteredProducts = [...products]
const productsContainer = document.querySelector(".notSidebar")
const searchForm = document.querySelector(".searchForm")
const searchInput = document.querySelector(".searchInput")

searchForm.addEventListener("keyup", () => {
    
})

function showProd() {
    productsContainer.innerHTML = products.map(product => {
        return `
                <article class="product">
                    <img src="${product.image}" alt="${product.title}">
                    <footer>
                        <p class="productName">${product.title}</p>
                        <p class="productPrice">${product.price}</p>
                    </footer>
                </article>
                `
    })
}

showProd()