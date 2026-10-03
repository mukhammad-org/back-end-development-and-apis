// Starter file — add your code here
const fs = require("fs");

// const data = fs.readFileSync("assets/poem.txt",{encoding:"utf-8"});

// fs.readFile("assets/poem.txt", {encoding:"utf-8"}, (err,data) => {
    console.log(data)
//})

const fspromises = require('fs/promises');

async function main(){
    const data = await fspromises.readFile("assets/poem.txt", {encoding:"utf-8",})
    console.log(data);
}

main();

fs.writeFileSync("assets/output.txt","hello, freeCodeCamp!");
 
const output = fs.readFileSync("assets/output.txt",{encoding:"utf-8"});

fs.appendFileSync("assets/output.txt","\nSecond line");


console.log(output)