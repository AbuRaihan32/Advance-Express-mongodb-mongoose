const EventEmitter = require("events");

const MyEmitter = new EventEmitter();

//* first Listener
MyEmitter.on("birthday", () => {
  console.log("Happy birthday to you");
});

//* second listener
MyEmitter.on("birthday", (gift) => {
  console.log(`I will give a ${gift}`);
});

MyEmitter.emit("birthday", 'watch');
