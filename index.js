const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()
// Bot tokeningiz
const TOKEN = process.env.TELEGRAM_TOKEN ;

// Heroku porti va URL konfiguratsiyasi
const PORT = process.env.PORT || 3000;
const bot = new TelegramBot(TOKEN, {
   polling:true
  });
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.chat.first_name;

    

   
// Javob yuborish
    bot.
    bo
sendMessage(chatId, `Salom, ${firstName}! Botga xush kelibsiz.`);
});




