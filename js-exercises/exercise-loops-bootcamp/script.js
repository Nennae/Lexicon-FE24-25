/* FOR LOOPS */
// 01 
for (let i = 0; i <= 1000; i++) {
      console.log(i);
}

// 02
for (let i = 100; i >= 0; i--) {
      console.log(i);
}

// 03
let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];

for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
}

/* FOR OF LOOPS */
// 04
let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw']

for (let thing of things) {
      console.log(thing);
}

/* FOREACH LOOPS */
// 05
things.forEach((thing) => console.log(thing));

// 06
things.forEach((thing, index) => console.log(thing, index));

/* WHILE LOOPS */
// 07
let iterator = -1;
while (iterator < 1000) {
      iterator++;
      console.log(iterator);
};

/* LOOPS DA LOOP */
// 08
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suites = ['HEARTS', 'SPADES', 'CLOVES', 'DIAMONDS']
const cards = [];
for (let s = 0; s < suites.length; s++) {
      for (let v = 0; v < values.length; v++) {
            const value = values[v];
            const suite = suites[s];
            cards.push({ value, suite });
      }
}
console.log(cards);