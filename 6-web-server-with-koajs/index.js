const Koa = require("koa");
const app = new Koa();

// response
app.use((ctx) => {
  console.log(ctx);

  const url = ctx.url;

  if (url === "/") {
    ctx.body = "<h1>INDEX PAGE</h1>";
  } else if (url === "/aboutMe") {
    ctx.body = "<h1>ABOUT ME PAGE</h1>";
  } else if (url === "/contact") {
    ctx.body = "<h1>CONTACT PAGE</h1>";
  } else {
    ctx.body = "<h1>404 NOT FOUND</h1>";
  }
});

app.listen(3000);
