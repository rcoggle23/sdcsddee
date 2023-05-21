const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("#ffffff")
.setAuthor(`Voixy Linkler`, client.user.avatarURL())
.setDescription('**• [Voixy`i Ekleyin.](https://discord.com/api/oauth2/authorize?client_id=1109427651174731917&permissions=8&scope=bot [Voixy Botumuza  Oy Ver](Yakında**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };