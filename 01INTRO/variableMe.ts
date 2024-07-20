let greetings: string = "Hello Damodar";
let myNum = 6;

// myNum.toUpperCase()
// greetings.toLowercase()

greetings.toLowerCase();
console.log(greetings);

//number
let userId: number = 123456.34;
let userId2 = 45835.9;

userId.toFixed();
userId2.toFixed();

//boolean
let isLoggenIn: boolean = false;

isLoggenIn.valueOf();

//any

// let hero; // don't write like this
let hero: string; // write like this 

function getHero(){
    return "Iron man"
}
hero = getHero()

export {};
