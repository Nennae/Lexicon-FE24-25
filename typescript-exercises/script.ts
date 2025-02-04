let greeting: string = "Hello, World!";
console.log(greeting);

let boolish: boolean = true;

let numrish: number = 42;

console.log(greeting, boolish, numrish);

let myStringArray: string[] = ["Hello", "World"];

let myUnion: string | boolean = "Sezen";

type User = {
      name: string,
      interests: string[]
}

let myUserArr: User[] = [
      {
            name: "Sezen",
            interests: myStringArray
      },
      {
            name: "Monncake",
      interests: ["Play", "Eat"]
      }    
]

let myObjList: object[] = [
      {
            name: "Sezen"
      }
]

interface IGoose {
      feathers: number,
      isCute: boolean,
      honk?: () => string; // Valfri
}

let geese: IGoose[] = [];

let myGoose: IGoose = {
      feathers: 200,
      isCute: true,
      honk: () => "Honk honk" // Kan bli borttagen då den är deklarerad som valfri på rad 39
}
geese.push(myGoose);
console.log(geese);

// Type assertion
let btn: HTMLButtonElement = document.querySelector("button") as HTMLButtonElement;

// Null check
const button = document.querySelector("button");
if (button !== null) {
      const myButton: HTMLButtonElement = button;
}

// unknown data type / exception (avoid)
let myVariable: any = "I'm free!";