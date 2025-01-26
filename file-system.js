const fs = require("fs");


//! synchronous file system
//* Read File text
const readText = fs.readFileSync("./texts/read.txt", "utf-8");
console.log(readText);

//* write File text
const writeText = fs.writeFileSync(
  "./texts/read.txt",
  readText + " hello world"
);


