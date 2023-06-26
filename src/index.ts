const server = Bun.serve({
  port: 6969,
  fetch(req) {
    return new Response(`Bun Deez Nuts`);
  },
});

console.log(`⚡️[bun]: Listening on http://localhost:${server.port}...`);
