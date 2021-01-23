// Shopping cart using Classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  currencyExchange(currency) {
    const rate = { EUR: 0.27, USD: 0.16 };
    return this.price * rate[currency];
  }
}
class ShoppingCart {
  constructor() {
    this.products = [];
  }
  addProduct(product) {
    // Implement functionality here
    this.products.push(product);
  }
  removeProduct(product) {
    // Implement functionality here
    this.products = this.products.filter((cart) => cart.name !== product.name);
  }
  searchProduct(productName) {
    // Implement functionality here
    const searchProduct = this.products.filter((product) =>
      product.name.toLowerCase().includes(productName.toLowerCase())
    );
    return searchProduct;
  }
  getTotal() {
    // Implement functionality here
    const totalPrice = this.products.map((product) => product.price);
    let sum = 0;
    for (let i = 0; i < totalPrice.length; i++) {
      sum += totalPrice[i];
    }
    return sum;
  }
  renderProducts() {
    // Implement functionality here
    const shopping = document.getElementById("shooping");

    this.products.forEach((product) => {
      const productItem = document.createElement("ul");
      productItem.innerHTML = `
        <div> Product_Name: ${product.name}</div>
        <div> Price: ${product.price}</div>`;

      shopping.appendChild(productItem);
    });
    const total = document.createElement("li");
    total.innerHTML = `User Name :${this.getUser()} , Total Price ${this.getTotal()}`;
    shopping.appendChild(total);
  }
  getUser() {
    // Implement functionality here
    fetch(`https://jsonplaceholder.typicode.com/users/1`)
      .then((response) => response.json())
      .then((user) => {
        return user.name;
      });
  }
}
const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);
const laptop = new Product("laptop", 8000);
const mobile = new Product("Mobile", 9000);
shoppingCart.addProduct(flatscreen);
shoppingCart.removeProduct(flatscreen);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(mobile);
shoppingCart.getTotal();
shoppingCart.renderProducts();
console.log(shoppingCart);
const plant = new Product("plant", 50);
console.log(plant.currencyExchange("EUR"));
