module.exports = {
    name: 'Bison',
    description: 'Displays bison info',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const animalEmbed = new Discord.MessageEmbed()
        .setTitle('_Bison_')
        .setDescription("By killing a Bison, the player will receive Bison Fur, Bison horns and Prime Beef. The latter can be used in the Thyme Prime Beef Recipe. We recomend using a rifle or sniper-rifle to kill a bison")
        .setImage('https://i.imgur.com/Q4j7htJ.png')
        .setColor(0xCB4C3A)
    message.channel.send(animalEmbed)

    }
}