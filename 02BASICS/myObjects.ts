// const User = {
//   name: "Damodar",
//   email: "damodar@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "Damodar", isPaid: false, email: "dam@gmail.com" };
// createUser(newUser);

// const createCourse = (): { name: string; price: number } => {
//   // Return an object with name and price properties
//   return { name: "Reactjs", price: 399 };
// };

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

type myString = string;

const createUser = (user: User): User => {
  return { name: "", email: "", isActive: true };
};

createUser({ name: "", email: "", isActive: true });
export {};
