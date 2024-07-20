let score: number | string = 33;
score = 44;
score = "44";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let damodar: User | Admin = { name: "damodar", id: 123 };
damodar = { username: "patil", id: 321 };

// function getDbId(id: number | string) {
//   // making some API calls
//   console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");

function getDbId(id: string | number) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//array

const data: number[] = [1, 2, 3, 4, 5];
const data2: string[] = ["1", "2", "3"];
const data3: string[] | number[] = ["1", "2", "3"];
const data4: (string | number)[] = ["1", 2, "3", 4];

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"