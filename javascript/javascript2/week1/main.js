console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);
function renderProducts(products) {
    const ulList = document.createElement("ul");
    document.body.appendChild(ulList);

    for(let product of products) {
        const liList = document.createElement("li");
        ulList.appendChild(liList);
        const h2Tag = document.createElement("h2");
        h2Tag.innerHTML = product.name;
        liList.appendChild(h2Tag);
        const spanTag = document.createElement("span");
        spanTag.innerHTML = `price: ${product.price}`;
        liList.appendChild(spanTag);
        const brTag = document.createElement("br");
        liList.appendChild(brTag);
        const spanTag2 = document.createElement("span");
        spanTag2.innerHTML = `Rating: ${product.rating}`;
        liList.appendChild(spanTag2);
    }
}

renderProducts(products); 
