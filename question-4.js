// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

console.log(inventory[0].name)
console.log(inventory[0].quantity)

function lessQuantity(){
  let total;
  for (let i=0;i<inventory.length;i++){
    total = inventory[i].quantity
    if (total < inventory[i].quantity ){
      total = inventory[i].name + inventory[i].quantity
      console.log(total)
    }return total
  }
}
console.log(inventory)
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${lessQuantity(inventory.name)} ซึ่งมี ${lessQuantity(inventory.quantity)} ชิ้น`)



// let totalPrice=0
// for (let i=0;i<inventory.length;i++){
//   if (inventory[i].price * inventory[i].quantity)
//     {
//     totalPrice += (inventory[i].price * inventory[i].quantity)
//   }console.log(inventory[i].price * inventory[i].quantity)
// }

// console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalPrice} บาท`)