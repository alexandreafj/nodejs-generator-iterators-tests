import { createServer } from "http";
import { randomUUID } from "crypto";
import { parse } from "url";
const PORT = 3000;
async function handler(request, response) {
  if (request.method === "GET" && request.url.includes("products")) {
    const {
      query: { productName },
    } = parse(request.url, true);

    return response.end(
      JSON.stringify({
        id: randomUUID(),
        product: productName,
      })
    );
  }

  return response.end("finish product!");
}

createServer(handler).listen(PORT, () =>
  console.log(`products API is running at ${PORT}`)
);
