module.exports = {
    name: 'BlackCurrant',
    description: 'Displays Black Currant location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Black Currant_')
        .setDescription("Red Dead Redemption 2 Blackcurrant is a collectable plant that can be harvested and gather, Can be crafted into Special Snake Oil. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/VczdicC.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}