module.exports = {
    name: 'ParasolMushroom',
    description: 'Displays Parasol Mushroom location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Parasol Mushroom_')
        .setDescription("Red Dead Redemption 2 Parasol Mushroom is a collectable plant that can be harvested and gather, Can be crafted into a Special Horse Reviver. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/dsyWSJ3.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}