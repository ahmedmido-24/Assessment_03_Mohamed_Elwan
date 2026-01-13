const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const { pipeline } = require("stream");
const http = require("http");
/*
 Use a readable stream to read a file in chunks and log each chunk. 
• Input Example: "./big.txt"
• Output Example: log each chunk
*/

// const filePath = path.join(__dirname, "big.txt");
// const readStream = fs.createReadStream(filePath, { encoding: "utf-8" });

// readStream.on("data", (chunk) => {
//   console.log(chunk);
// });

// readStream.on("error", (err) => {
//   console.error("Error reading file:", err.message);
// });

////////////////////////////////////////////////////////////////////////////////////////
/**
 * 2. Use readable and writable streams to copy content from one file to another. (0.5 Grade)
• Input Example: "./source.txt", "./dest.txt"
• Output Example: File copied using streams
 */

// const sourcePath = path.join(__dirname, "source.txt");
// const destPath = path.join(__dirname, "dest.txt");

// const readStreamCopy = fs.createReadStream(sourcePath);
// const writeStreamCopy = fs.createWriteStream(destPath);

// readStreamCopy.pipe(writeStreamCopy);

// writeStreamCopy.on("finish", () => {
//   console.log("File copied using streams");
// });

// readStreamCopy.on("error", err => console.error(err));
// writeStreamCopy.on("error", err => console.error(err));

////////////////////////////////////////////////////////////////////////////////////////
/**
 * 3. Create a pipeline that reads a file, compresses it, and writes it to another file. (0.5 Grade)
• Input Example: "./data.txt", "./data.txt.gz"
 */

// const sourceCompress = path.join(__dirname, "data.txt");
// const destCompress = path.join(__dirname, "data.txt.gz");

// const readStreamCompress = fs.createReadStream(sourceCompress);
// const writeStreamCompress = fs.createWriteStream(destCompress);
// const gzip = zlib.createGzip();

// pipeline(readStreamCompress, gzip, writeStreamCompress, (err) => {
//   if (err) console.error("Pipeline failed:", err);
//   else console.log("File compressed successfully");
// });
////////////////////////////////////////////////////////////////////////////////////////
/**
 * API Implementation
 * 1. Add User (POST /user)
 * 2. Update User (PATCH /user/:id)
 * 3. Delete User (DELETE /user/:id)
 * 4. Get All Users (GET /user)
 * 5. Get User by ID (GET /user/:id)
 */

// const usersFilePath = path.join(__dirname, "users.json");

// const server = http.createServer((req, res) => {
//   const { method, url } = req;

//   const getUsers = () => {
//     if (fs.existsSync(usersFilePath)) {
//       const data = fs.readFileSync(usersFilePath, "utf-8");
//       return data ? JSON.parse(data) : [];
//     }
//     return [];
//   };

//   const saveUsers = (users) => {
//     fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
//   };

//   // 1. Add User (POST /user)
//   if (method === "POST" && url === "/user") {
//     let body = "";
//     req.on("data", (chunk) => (body += chunk));
//     req.on("end", () => {
//       try {
//         const newUser = JSON.parse(body);
//         const users = getUsers();
//         const emailExists = users.some((user) => user.email === newUser.email);

//         if (emailExists) {
//           res.writeHead(400, { "Content-Type": "application/json" });
//           res.end(JSON.stringify({ message: "email is exist" }));
//         } else {
//           users.push(newUser);
//           saveUsers(users);
//           res.writeHead(201, { "Content-Type": "application/json" });
//           res.end(JSON.stringify({ message: "user added successfully" }));
//         }
//       } catch (err) {
//         res.writeHead(500, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Server Error" }));
//       }
//     });
//   }

//   // 2. Update User (PATCH /user/:id)
//   else if (method === "PATCH" && url.startsWith("/user/")) {
//     const id = url.split("/")[2];
//     let body = "";
//     req.on("data", (chunk) => (body += chunk));
//     req.on("end", () => {
//       try {
//         const updates = JSON.parse(body);
//         const users = getUsers();
//         const userIndex = users.findIndex((user) => user.id == id);

//         if (userIndex !== -1) {
//           users[userIndex] = { ...users[userIndex], ...updates };
//           saveUsers(users);
//           res.writeHead(200, { "Content-Type": "application/json" });
//           res.end(JSON.stringify({ message: "User updated successfully" }));
//         } else {
//           res.writeHead(404, { "Content-Type": "application/json" });
//           res.end(JSON.stringify({ message: "User not found" }));
//         }
//       } catch (err) {
//         res.writeHead(500, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Server Error" }));
//       }
//     });
//   }

//   // 3. Delete User (DELETE /user/:id)
//   else if (method === "DELETE" && url.startsWith("/user/")) {
//     const id = url.split("/")[2];
//     const users = getUsers();
//     const newUsers = users.filter((user) => user.id != id);

//     if (newUsers.length !== users.length) {
//       saveUsers(newUsers);
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "User deleted successfully" }));
//     } else {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "User not found" }));
//     }
//   }

//   // 4. Get All Users (GET /user)
//   else if (method === "GET" && url === "/user") {
//     const users = getUsers();
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(users));
//   }

//   // 5. Get User by ID (GET /user/:id)
//   else if (method === "GET" && url.startsWith("/user/")) {
//     const id = url.split("/")[2];
//     const users = getUsers();
//     const user = users.find((u) => u.id == id);

//     if (user) {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(user));
//     } else {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "User not found" }));
//     }
//   }

//   // 404 Not Found
//   else {
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "Route not found" }));
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

////////////////////////////////////////////////////////////////////////////////////////
//1. What is the Node.js Event Loop?
//The Event Loop is what coordinates the traffic. It ensures that the main thread never gets blocked waiting for slow tasks
// It keeps the application responsive by constantly checking if there is work to do in the queue only when the main stack is clear

// 2. What is Libuv and What Role Does It Play in Node.js?
// Libuv is a multi platform C++ library that provides support for asynchronous I/O based on event loops.
// It is responsible for handling the Thread Pool (for file I/O, compression) and abstracting OS-specific operations.
// Essentially, it is the engine that makes the non-blocking nature of Node.js possible

// 3. How Does Node.js Handle Asynchronous Operations Under the Hood?
// Node.js uses the Event Loop and Libuv to handle asynchronous operations

//4. What is the Difference Between the Call Stack, Event Queue, and Event Loop in Node.js?
// The Call Stack is where JavaScript code executes line by line
// The Event Queue holds callbacks that are ready to be executed
// The Event Loop continuously checks the Call Stack and Event Queue moving callbacks from the queue to the stack when the stack is empty

//5. What is the Node.js Thread Pool and How to Set the Thread Pool Size?
// The Thread Pool is a pool of threads (default 4) managed by Libuv to handle blocking operations (like fs, crypto, zlib)
// Since Node.js is single-threaded, these threads allow heavy tasks to run in the background without blocking the main Event Loop
// You can adjust the pool size using the UV_THREADPOOL_SIZE environment variable
// Example: UV_THREADPOOL_SIZE=8 node app.js

// 6. How Does Node.js Handle Blocking and Non-Blocking Code Execution?
// Blocking code executes synchronously on the Call Stack stopping the program until the task is done
// Non-blocking code is offloaded (to Libuv/OS) allowing the Call Stack to continue processing other tasks immediately
// This ensures the application remains responsive even during heavy I/O operations
