const Discord = require('discord.js');

 exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:a_:1109866752428490974>   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);


   let question = args.join(' ');

   let user = message.author.username
     const embedd = new Discord.MessageEmbed()

     .addField(`Yazı Yazman Gerek`);
   
   if (!question) return message.channel.send(embedd).then(m => m.delete(5000)); 

       const embed = new Discord.MessageEmbed()

       .setColor("#ffffff")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter(' Voixy ', client.user.avatarURL)

       .addField(`** Voixy   | Oylama**`, `**${question}**`);
   
     message.channel.send(embed).then(function(message) {

         message.react('👍🏻');

         message.react('👎🏻');

       });

     };

exports.config = {
name: "oylama",
aliases: ["oylama-yap"]
};

