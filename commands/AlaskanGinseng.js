module.exports = {
    name: 'AlaskanGinseng',
    description: 'Displays AlaskanGinseng location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Alaskan Ginseng_')
        .setDescription("Red Dead Redemption 2 Alaskan Ginseng is a collectable plant that can be harvested and gather, Can be crafted into a Potent Miracle Tonic. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/kvORD7N.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}