const fs = require("fs");

const readStream = fs.createReadStream("./data.txt");

readStream.on("data", (chunk) => {
  console.log(".........................");
  console.log(chunk);
});

readStream.on("open", () => {
  console.log("stream is open");
});

setTimeout(() => {
  readStream.pause()
  console.log("stream is pause");
}, 15);
