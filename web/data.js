const array1 = [
  "Ali",
  "Lahore",
  34,
  67,
  "Alex",
  "C",
  "A"
];

const numbers = [];
const words = [];
const letters = [];
array1.map( (item) => {
  if (typeof item == "number") {
    numbers.push(item);
  }else if(typeof item == "string" && item.length == 1){
    words.push(item)
  } else {
    letters.push(item)
  }
});





console.log(numbers, words, letters)
// hint: typeof;