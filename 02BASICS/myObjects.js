"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Damodar",
    email: "damodar@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Damodar", isPaid: false, email: "dam@gmail.com" };
createUser(newUser);
var createCourse = function () {
    // Return an object with name and price properties
    return { name: "Reactjs", price: 399 };
};
