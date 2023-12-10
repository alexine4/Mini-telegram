import {token,webAppUrl} from './config.js';
import { Telegraf, Markup} from 'telegraf';

const bot = new Telegraf(token)

bot.command('start',(ctx)=>{
    ctx.reply(
        'Hi, Press button to starting aplication',
        Markup.keyboard([
            Markup.button.webApp(
                'Send the message',webAppUrl
            )
        ])
    )
})

bot.launch()