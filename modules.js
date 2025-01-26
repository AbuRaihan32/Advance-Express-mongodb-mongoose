//* local modules
const add = (p1, p2) => p1 + p2;
const a = 50;

module.exports = {
  add,
  a,
};


//* building modules
const path = require('path');

console.log(path.dirname('/D:/.Level-2/2.Learning-Node.js/index.js'));
console.log(path.parse('/D:/.Level-2/2.Learning-Node.js/index.js'));
console.log(path.join('/D:/.Level-2/2.Learning-Node.js/','index.js'));