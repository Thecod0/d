const Eris = require("eris");

const bot = new Eris(process.env.token, {
  status: "dnd" 
});

bot.on("error", (err) => {
  console.error(err);
});

bot.connect();
