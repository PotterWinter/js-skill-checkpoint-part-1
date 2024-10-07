// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
// "SALE20"
// "SALE50"

function calculateTotalPrice() {
  let total = 0;
  console.log(products);
  for (let i = 0; i < products.length; i++) {
    console.log(products[i].price);
    console.log(products[i].quantity);
    if (products[i]) {
      total += products[i].price * products[i].quantity;
      console.log(total);
    }
    if (promotionCode === "SALE20") {
      total = total * (1 - 0.2);
    } else if (promotionCode === "SALE50") {
      total = total * (1 - 0.5);
    }
  }
  return total;
}
console.log(products, promotionCode);
console.log(calculateTotalPrice(products));
