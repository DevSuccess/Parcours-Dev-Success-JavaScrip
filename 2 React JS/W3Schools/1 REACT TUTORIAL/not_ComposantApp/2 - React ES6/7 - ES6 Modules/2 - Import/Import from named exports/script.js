import {name, age} from "./person.js";

document.getElementById("demo").innerHTML = `My name is ${name}`;
document.getElementById("demo").innerHTML += `, I am ${age}.`;