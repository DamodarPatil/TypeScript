function addTwo(num: number): number {
  return num + 2;
  // return "Damodar";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);

getUpper("Damodar");

signUpUser("Damodar", "damodar@gmail.com", true);

loginUser("Nitrohunter", "nitro@gmail.com");

// function getValue(myVal:number){
//   if(myVal > 5){
//     return true
//   }
//   return "200 OK"
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(err: string): void {
  console.log(err);
}

function handleError(err: string): never {
  throw new Error(err)
}
export {};
