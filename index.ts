const server = Bun.serve({
  hostname: "::",
  port: process.env.PORT ?? 3000,
  fetch(request) {
    return new Response("Welcome to Bun updated!");
  },
});

console.log(`Listening on http://localhost:${server.port}`);
