//Array innehållandes flera objekt
let persons = [
    {
        name: "Felicia",
        age: 12
    },
    {
        name: "Pelle",
        age: 20
    },
    {
        name: "Peter",
        age: 59
    },
    {
        name: "Anna",
        age: 32
    },
    {
        name: "Jocke",
        age: 18
    },
    {
        name: "Ella",
        age: 3
    }
]



/* 1 */
/* Gör en array som innehåller 5 st olika frukter av datatypen string. */
const fruits = ["apple", "banana", "kiwi", "melon", "orange"];
console.log(fruits);
console.log('Uppgift 1');

/* 2 */
/* Gör en array som innehåller 3 olika datatyper, ex. string, number, array. */
const randomList = [3, "bubbles", true, ["blue", "baby"]];
console.log(randomList);
console.log('Uppgift 2');

/* 3 */
let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
console.log(animals.length);
console.log('Uppgift 3');

/* 4 */
let animals2 = ['cat', 'hamster', 'parrot', 'funky chihuahua'];
/* I arrayen ovan, hämta cat. */
console.log(animals2[0]);
console.log('Uppgift 4');

/* 5 */
let animals3 = ['cat', 'hamster', 'parrot', 'funky chihuahua'] 
/* I arrayen ovan, hämta funky chihuahua. */
console.log(animals3[3]);
console.log('Uppgift 5');

/* 6 */
let animals4 = ['cat', 'hamster', 'parrot', 'funky chihuahua']
/* I arrayen ovan, byt ut hamster mot tiger. */
animals4.splice(1, 1, "tiger");
console.log(animals4);
console.log('Uppgift 6');

/* 7 */
let a = [1,2,3];
let b = [4,5,6];
/* Sätt ihop ovanstående arrayer. */
let joinedArr = a.concat(b);
console.log(joinedArr);
console.log('Uppgift 7');

/* 8 */
let c = [1,2,3,7,8,9];
let d = [4,5,6]; 
/* Merga in array b på index 3 i array a.. */
let mergedArr = c.slice(0, 3).concat(d, c.slice(3));
console.log(mergedArr);
console.log('Uppgift 8');

/* 9 */
let arr = ['a', 'b', 'c'];
/* Klona ovanstående array. */
let clonedArr = [...arr];
console.log(clonedArr);
console.log('Uppgift 9');

/* 10 */
let fruits2 = ['kiwi', 'apple', 'pear'];
/* Lägg till en frukt i slutet av arrayen ovan. */
fruits2.push("banana");
console.log(fruits2);
console.log('Uppgift 10');

/* 11 */
let fruits3 = ['kiwi', 'apple', 'pear']; 
/* Lägg till en frukt i början av arrayen ovan. */
fruits3.unshift("orange");
console.log(fruits3);
console.log('Uppgift 11');

/* 12 */
let fruits4 = ['kiwi', 'apple', 'pear'];
/* I arrayen ovan, ta bort sista frukten i arrayen. */
fruits4.pop(-1);
console.log(fruits4);
console.log('Uppgift 12');

/* 13 */
let fruits5 = ['kiwi', 'apple', 'pear'];
/* I arrayen ovan, ta bort första frukten i arrayen. */
fruits5.shift(0);
console.log(fruits5);
console.log('Uppgift 13');

/* 14 */
let fruits6 = ['kiwi', 'apple', 'pear'];
/* Sätt in en frukt i arrayen ovan på index 1. */
fruits6.splice(1, 0, "melon");
console.log(fruits6);
console.log('Uppgift 14');

/* 15 */
let fruits7 = ['kiwi', 'apple', 'pear'];
/* Sätt in, tre frukter i arrayen ovan på index 2. */
let fruitsToBeAdded = ['banana', 'lemon', 'litchi'];
let mergedFruitArrs = fruits7.slice(0, 2).concat(fruitsToBeAdded, fruits7.slice(2));
console.log(mergedFruitArrs);
console.log('Uppgift 15');

/* 16 */
let names = ['David', 'Christoffer', 'Johan', 'Maja']
/* I arrayen ovan, ta bort Christoffer och Johan. */
names.splice(1, 2);
console.log(names);
console.log('Uppgift 16');

/* 17 */
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/* Spegelvänd på arrayen ovan. */
nums.reverse();
console.log(nums);
console.log('Uppgift 17');

/* 18 */
let str = 'Supercalifragilisticexpialidocious';
/* Kika om strängen ovan innehåller bokstaven n. */
console.log(str.includes('n'));
console.log('Uppgift 18');

/* 19 */
let str2 = 'Supercalifragilisticexpialidocious'; 
/* Kika om strängen ovan innehåller bokstaven x. */
console.log(str2.includes('x'));
console.log('Uppgift 19');

/* 20 */
let str3 = 'Supercalifragilisticexpialidocious';
/* I ovanstående sträng, hitta vilket position första förekomsten av p har. */
console.log(str3.indexOf('p'));
console.log('Uppgift 20');

/* 21 */
let str4 = 'Supercalifragilisticexpialidocious';
/* I strängen ovan, plocka fram de 5 första tecknena. */
console.log(str3.substring(0, 5))
console.log('Uppgift 21');

/* 22 */
let str5 = 'Supercalifragilisticexpialidocious';
/* I strängen ovan, plocka fram de 7 sista tecknena. */
console.log(str5.substr(-7, 7))
console.log('Uppgift 22');

/* 23 */
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
/* I arrayen ovan, filtera fram alla nummer över 5. Tips: Läs dokumentationen för filter() */
let filteredNums = numArray.filter(num => num > 5);
console.log(filteredNums);
console.log('Uppgift 23');

/* 24 */
let numArray2 = [23, 45, 5, 62, 1, 21, 3, 54];
/* I arrayen ovan, filtera fram alla nummer under 5. Tips: Läs dokumentationen för filter() */
let filteredNums2 = numArray.filter((num) => num < 5);
console.log(filteredNums2);
console.log('Uppgift 24');

/* 25 */
/* Skriv ut alla namn som är 18 år eller över från arrayen längst upp i dokumentet. */

    let filteredPersons = persons.filter((person) => {
        if (person.age >= 18) {
            console.log(person.name);
        } else {
            console.log("All other persons are under 18 years old");
        }
    })
console.log(filteredPersons);
console.log('Uppgift 25');

/* 26 */
/* Skriv ut alla namn som är under 18 år från arrayen längst upp i dokumentet. */
let filteredPersons2 = persons.filter((person) => {
  if (person.age <= 18) {
    console.log(person.name);
  } else {
    console.log("All other persons are above 18 years old.");
  }
});
console.log(filteredPersons2);
console.log('Uppgift 26');

/* 27 */
let arr2 = ['beta', 'alfa', 'gamma'];
/* Sortera ovanstående array alfabetisk. Tips: Läs dokumentattionen för sort() */
console.log(arr2.sort());
console.log('Uppgift 27');

/* 28 */
let nums2 = [1,5,7,9,3,4,2,6,8];
/* Sortera ovanstående array numeriskt. */
console.log(nums2.sort());
console.log('Uppgift 28');

/* 29 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, yngst först. */
persons.sort((a, b) => a.age - b.age);
console.log(persons);
console.log('Uppgift 29');

/* 30 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, äldst först. */
persons.sort((a, b) => b.age - a.age);
console.log(persons);
console.log('Uppgift 30');

/* 31 */
/* I person-arrayen längst upp i dokumentet, sortera objekten i bokstavsordning efter deras namn */
persons.sort(function (a, b) {
    return a.name.localeCompare(b.name);
});
console.log(persons);
console.log('Uppgift 31');

/* 32 */
/* I person-arrayen längst upp i dokumentet, gör om alla namn till versaler. */
let upperCasedPersons = persons.map((person) => person.name.toUpperCase());
console.log(upperCasedPersons);
console.log('Uppgift 32');

/* 33 */
/* I person-arrayen längst upp i dokumentet, spegelvänd alla namn. */
let reversedNames = persons.map((person) => person.name.split('').reverse().join(''));
console.log(reversedNames);
console.log('Uppgift 33');

/* 34 */
let fruitsArr = ['apelsin', 'päron', 'äpple', 'kiwi'];
/* Loopa ut följande array med en forEach()-loop. console.log() varje ord. */
fruitsArr.forEach((fruit) => console.log(fruit));
console.log('Uppgift 34');

/* 35 */
let fruitsArr2 = ['apelsin', 'päron', 'äpple', 'kiwi'];
/* Loopa ut följande array med en for of-loop. console.log() varje ord. */
for (let fruits of fruitsArr2) {
    console.log(fruits);
}
console.log('Uppgift 35');

/* 36 */
let fruitsArr3 = ['apelsin', 'päron', 'äpple', 'kiwi']; 
/* Loopa ut följande array med en for-loop. console.log() varje ord. */
for(let i = 0; i < fruitsArr3.length; i++) {
    console.log(fruitsArr3[i]);
}
console.log('Uppgift 36');

/* 37 */
let fruitsArr4 = ['apelsin', 'päron', 'äpple', 'kiwi'];
/* Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex: */
/* 0 - apelsin */
/* 1 - päron */
/* 2 - äpple */
/* osv... */
fruitsArr4.map((fruit, index) => {
    console.log(`${fruit} is at index ${index}`);
});
console.log('Uppgift 37');

