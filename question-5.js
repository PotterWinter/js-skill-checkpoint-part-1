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
let total;
let countNum;

console.log(products);
console.log(products[0].name);
console.log(products[0].price);
console.log(products[0].quantity);
function calculateTotalPrice(a, b) {
  for (let i = 0; i < products.length; i++) {
    if (products[i]) {
      console.log(i);
      total = (products[i].price * products[i].quantity)
      console.log(total);
      sum = total
      console.log(sum)
    } else if (promotionCode === "SALE20") {
      sum = total * (1 - 0.2);
      console.log(sum);
    } else if (promotionCode === "SALE50") {
      sum = total * (1 - 0.5);
      console.log(sum);
    }
  }
}

promotionCode.push = [123]
console.log(promotionCode)

console.log(calculateTotalPrice(products, promotionCode));
