const server = Bun.serve({
  port: 6969,
  fetch(req) {
    const response = new Response(`Bun says "Hi!"`);

    // Set CORS headers
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, HEAD, POST, OPTIONS"
    );
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
  },
});

console.log(`⚡️[bun]: Listening on http://localhost:${server.port}...`);
