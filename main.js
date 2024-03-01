import { token, webAppUrl, ChatGPTAppUrl } from "./config.js";
import { Telegraf, Markup } from "telegraf";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Hi, Press button to starting application",
    Markup.keyboard([
      Markup.button.webApp("Start app", webAppUrl),
      Markup.button.webApp("Open ChatGPT", ChatGPTAppUrl),
    ])
  );
});

bot.launch();
