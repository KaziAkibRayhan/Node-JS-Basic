// // locale module
// const name = require("./other");
// console.log(name);

// // core modules
// const http = require("http");
// // Third party module
// const _ = require("underscore");

// const server = http.createServer((req, res) => {
//   console.log("server is running!");
// });

// server.listen(5000);

// var stooges = [
//   { name: "moe", age: 40 },
//   { name: "larry", age: 50 },
//   { name: "curly", age: 60 },
// ];
// const _name = _.pluck(stooges, "name");
// console.log(_name);

/* Node First Server Create */

// const http = require("http");
// const url = require("url");
// const server = http.createServer((req, res) => {
//   //   res.end("Node Hello !");
//   //   console.log(req.url);
//   //   if (req.url === "/") {
//   //     res.writeHead(200, { "Content-Type": "application/json" });
//   //     res.write(JSON.stringify({ course: "ACC" }));
//   //     res.end();
//   //   } else if (req.url === "/contact") {
//   //     res.writeHead(200, { "Content-Type": "text/html" });
//   //     res.write("<h2>This is Contact Page.</h2>");
//   //     res.end();
//   //   } else if (req.url === "/about-us") {
//   //     res.writeHead(200, { "Content-Type": "text/html" });
//   //     res.write("<h2>This is about us page.</h2>");
//   //     res.end();
//   //   }

//   const addressUrl =
//     "http://localhost:5000/contact?name=akib&country=bangladesh";
//   const parsedURL = url.parse(addressUrl, true);
//   console.log(parsedURL);
// });
// const PORT = 5000;
// server.listen(PORT);
// console.log(`server running on port ${PORT}`);

/* Fs Module Practice */

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   //   if (req.url === "/") {
//   //     fs.readFile("./data.txt", (err, data) => {
//   //       if (err) {
//   //         res.write("Data Read fail...");
//   //         res.end();
//   //       } else {
//   //         res.write(data);
//   //         res.end();
//   //       }
//   //     });
//   //   }

//   //   const data = fs.readFileSync("./data.txt");
//   //   res.write(data);
//   //   res.end();

//   fs.writeFile(
//     "./newData.txt",
//     "Continually implement sustainable results through multifunctional core competencies. Enthusiastically target leading-edge manufactured products rather than e-business synergy.",
//     (err) => {
//       if (err) {
//         res.write("Data failed to write");
//         res.end();
//       } else {
//         res.write("Data Write successfully");
//         res.end();
//       }
//     }
//   );
// });
// server.listen(5000);
// console.log("server running on port 5000");

/* Events, Stream, Buffer */
// Events
const events = require("events");
const eventEmitter = new events.EventEmitter();

// creating an event handler

const chitkarDibo = () => {
  console.log("oi beta koi toi, ami darai achi");
};
// assign the handler into an event
eventEmitter.on("scream", chitkarDibo).chitkarDibo;
// firing the event
eventEmitter.emit("scream");
