console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}


renderProducts(products);
//what are you looking for
let input = document.getElementById('productName')
input.addEventListener('keyup', (listOfProduct)=>{
    let filterProduct = listOfProduct.target.value.toLowerCase();
    const filteredValue = products.filter((element)=>{
        return element.name.toLowerCase().match(filterProduct);
  });
  productsUl.innerHTML = " ";
  renderProducts(filteredValue);
});
//set max price here
let priceInput= document.querySelector('.maxPrice');
 priceInput.addEventListener("keyup", (priceOfProduct)=>{
        let price = priceInput.value;
        const  priceFilter = products.filter((listOfProduct) =>{
        return listOfProduct.price <= price;
    } );
    productsUl.innerHTML = " ";
    renderProducts(priceFilter);
    renderProducts(sortedPrice);
})
//sor cheapest
let sorting = document.getElementById("sortselection");
sorting.addEventListener('change', function() {
   if(this.value == 'cheap')
   {
    const sortedPrice = products.sort((a,b)=>(a.price > b.price) ? 1 : -1)   
    productsUl.innerHTML = " ";
    renderProducts(sortedPrice);
} 
//sort expensive
else if (this.value == 'expensive')
{
    const sortedPrice = products.sort((a,b)=>(a.price < b.price) ? 1 : -1)   
    productsUl.innerHTML = " ";
    renderProducts(sortedPrice);
}
// sort by name
else if (this.value == 'name')
{
    const sortedName = products.sort((a,b)=>(a.name > b.name) ? 1 : -1)   
    productsUl.innerHTML = " ";
    renderProducts(sortedName);
}

});
//volume for set rating
let rangeSelection = document.getElementById("rangeRate");
rangeSelection.addEventListener('change', function() {
    const rateVar = rangeSelection.value;
    const  rateFilter = products.filter((listOfProduct) =>{
    return listOfProduct.rating >= rateVar;
});

productsUl.innerHTML = " ";
renderProducts(rateFilter);
});


/*try for country selection
let shipstoSelection = document.getElementById("shipsTo");
shipstoSelection.addEventListener('change', function() {
    const shipstoVar = shipstoSelection.value;
    const shipstoFilter = products.filter((element)=>{
        console.log(element.shipsTo);
        return element.shipsTo.forEach(function (cnt) {
            cnt == shipstoVar;
            //console.log(cnt);
        }) //includes(shipstoVar);
});

console.log(shipstoVar);
console.log(shipstoFilter);

productsUl.innerHTML = " ";
renderProducts(shipstoFilter);
});*/
