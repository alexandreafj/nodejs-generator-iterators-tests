import { createServer } from "http";
const PORT = 4000;

async function handler(request, response) {
  if (request.method === "POST" && request.url.includes("cart")) {
    for await (const data of request) {
      const item = JSON.parse(data);
      console.log("received", item);
      return response.end(`process succeeded for ${item.id}!`);
    }
  }

  return response.end("finish cart!");
}

createServer(handler).listen(PORT, () =>
  console.log(`cart API is running at ${PORT}`)
);
