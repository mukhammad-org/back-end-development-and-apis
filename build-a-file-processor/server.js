// Starter file — add your code here
const fs = require("fs");

const data = fs.readFileSync("assets/poem.txt",{encoding:"utf-8"});

fs.readFile("assets/poem.txt", {encoding:"utf-8"}, (err,data) => {
    console.log()
})

const fspromises = require('fs/promises');

async function main(){
    const data = await fspromises.readFile("assets/poem.txt", {encoding:"UTF-8",})
    console.log(data);
}

main();

fs.writeFileSync("assets/output.txt","hello, freeCodeCamp!");
 
const output = fs.readFileSync("assets/output.txt", {encoding:"UTF-8",});

fs.appendFileSync("assets/output.txt","\nSecond line");

const exists = fs.existsSync('assets/output.txt');
console.log(exists)

const entries = fs.readdirSync("assets")
console.log(entries)

console.log(output)

const buf = Buffer.from("Hello");
console.log(buf.toString('hex'));
console.log(buf.toString("base64"));

Buffer.alloc(8, 0xff)

const decoded = Buffer.from ("SGVsbG8=", "base64").toString("utf-8");
console.log(decoded);

const crypto = require("crypto");
const hash = crypto.createHash("sha256").update("hello").digest("hex");
console.log(hash)
crypto.randomBytes(16);
console.log(Buffer)
const id = crypto.randomUUID();
const os = require("os");
os.platform()
os.arch()
os.hostname()
console.log(os.totalmem())
console.log(os.freemem())
console.log(os.uptime())
console.log(os.cpus().length)
console.log(id);

const path = require("path")
const fullPath = path.join(__dirname,"assets","poem.txt");
console.log(fullPath)
console.log(path.basename(fullPath));
console.log(path.dirname(fullPath));
console.log(path.extname(fullPath));

console.log(path.join("assets","..", "server.js"));
console.log(path.resolve("assets","..","server,js"));

