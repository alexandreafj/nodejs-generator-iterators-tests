const stdin = process.stdin.on("data", (msg) =>
  console.log("entrada terminal", msg.toString())
);

const stdout = process.stdout.on("data", (msg) =>
  console.log("saida terminal", msg.toString())
);

stdin
  .pipe(stdout)

  .on("error")
  .on("end")
  .on("close");

// node -e "process.stdout.write(crypto.randomBytes(1e9))" > big.file

import http from "http";

import { readFileSync, createReadStream } from "fs";
http
  .createServer((req, res) => {
    // const file = readFileSync('big.file') //.toString()
    // res.write(file)
    // res.end()

    createReadStream("big.file").pipe(res);
  })
  .listen(3000, () => console.log("running at 3000"));

import net from "net";
net.createServer((socket) => socket.pipe(process.stdout)).listen(1338);

// node -e "process.stdin.pipe(require('net').connect(1338))"
