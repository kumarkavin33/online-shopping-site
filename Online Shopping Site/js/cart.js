let cart = JSON.parse(localStorage.getItem("cart"))||[];
let table = document.getElementById("cartTable");

let total=0;
cart.forEach((p,i)=>{
    total+=p.price*p.qty;
    table.innerHTML+=`
    <tr>
      <td>${i+1}</td>
      <td>${p.name}</td>
      <td>${p.qty}</td>
      <td>₹${p.price}</td>
      <td>₹${p.price*p.qty}</td>
    </tr>`;
});
document.getElementById("total").innerText="Total: ₹"+total;
