// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

let lessQuantity1 = inventory[0].quantity;
let lessQuantity2 = 0;
let lessName = " ";
console.log(inventory);
console.log(inventory.length);

for (let i = 0; i < inventory.length; i++) {
  console.log(inventory[i].quantity);
  if (inventory[i].quantity < lessQuantity1) {
    lessQuantity1 = inventory[i].quantity;
    console.log(lessQuantity1);
    lessName = inventory[i].name;
    console.log(inventory[i].name);
  }
}
console.log(lessQuantity1);
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${lessName} ซึ่งมี ${lessQuantity1} ชิ้น`);
