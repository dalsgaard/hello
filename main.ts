const who = Deno.env.get("HELLO_WHO")

Deno.serve((_req) => {
  return new Response(`Hello, ${who}!`);
});
