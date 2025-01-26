//! Asynchronous file system

const fs = require("fs");

//* Read file text
fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }

  console.log(data);

  // * write text
  fs.writeFile("./texts/read.txt", data + " async", "utf-8", (err) => {
    if (err) {
      throw Error(err);
    }
  });
});
