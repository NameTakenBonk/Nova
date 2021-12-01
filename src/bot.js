//Starting Varibles
const {Client,Intents} = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS]}); //I use client
require("dotenv").config();

//On ready will be moved in the commmand handler as an event
client.on("ready", () =>{
    console.log("Bot Ready!")
});

//Bot login btw token is saved in a dotencv so you can see :)
(async () =>{
  client.login(process.env.token);
})();