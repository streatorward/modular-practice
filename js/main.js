const dataManager = require("./data/dataManager.js")
const renderProductList = require("./product/productList.js")
const renderNavBar = require("./nav/navBar.js")
const renderForm = require("./product/productForm.js")


const saveProduct = (product) => {
    // Save the product to the API
    DataManager.saveProduct(product)
    .then(() => {
        renderProductList()
    })
}

renderNavBar().then(html => {
    document.querySelector("#navigation").innerHTML = html
    document.querySelector("#navbar").addEventListener("click", event => {
        const typeClickedOn = parseInt(event.target.id.split("--")[1])
        renderProductList(typeClickedOn)
    })
})
// renderProductList()
renderForm("#container", saveProduct)
