const DataManager = require("./data/dataManager.js")
const renderProductList = require("./product/productList.js")
const renderNavBar = require("./nav/navBar.js")
const renderForm = require("./product/productForm.js")


const saveProduct = (product) => {
    // Save the product to the API
    DataManager.saveProduct(product)
    .then(() => {
        renderProductList("#container", product.type)
    })
}

renderNavBar().then(html => {
    document.querySelector("#navigation").innerHTML = html
    document.querySelector("#navbar").addEventListener("click", event => {
        const linkId = event.target.id.split("--")[1]
        if (!linkId) {
            renderForm("#container", saveProduct)
        } else {
            const typeClickedOn = parseInt(linkId)
            renderProductList("#container", typeClickedOn)
        }

    })
})
renderProductList("#container")
