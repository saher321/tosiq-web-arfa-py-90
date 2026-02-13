const list = ["Shoes", "Shirts", "Pants", "Socks", "Hats"];
const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
// push
// list.push([ "Jacket", "Gloves", "Scarf" ]);
// unshift
// list.unshift([ "Jacket", "Gloves", "Scarf" ]);
// splice
// list.splice(2, 1, "Jacket", "Gloves", "Scarf");
// sort
// console.log("Array:", list.sort());
// const newArr = colors.concat(list);
const newArr = [...colors, ...list];
console.log(newArr);
let itemList = document.getElementById("item-list");
newArr.map((item, i) => {
    itemList.innerHTML += `<li> ${i+1} - ${item}</li>`;
});


