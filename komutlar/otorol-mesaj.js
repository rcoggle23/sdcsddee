const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:a_:1109866752428490974>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('<:a_:1109866752428490974>   **Sayaç Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin!**\n `**__Örnek__**: `-oto-rol-msg -uye- Hoşgeldin! senle beraber -uyesayisi- Kişiyiz!`')
  
 message.channel.send('<:a_:1109866752428490974>  **Oto-Rol mesajı** `'+mesaj+'` **Olarak ayarlandı!**') 
 db.set(`otoRM_${message.guild.id}`, mesaj)  

  
};
exports.config = {
  name: 'otorol-mesaj', 
  aliases: ['otorolmesaj','otorol-mesaj-ayarla','otorolmesaj-ayarla', 'otorolmesajayarla']
};

