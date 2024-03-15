import { sleepSync } from "bun";

let num = 1;

console.log(num);

 // num = "Hi mom!";

console.log(num);

while (true) {
    console.log("Hi mom!");
    sleepSync(3000);
}

