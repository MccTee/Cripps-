module.exports = {
    name: 'Milkweed',
    description: 'Displays Milkweed location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Milkweed_')
        .setDescription("Red Dead Redemption 2 Milkweed is a collectable plant that can be harvested and gather, Can be consumed to refill your Health Core. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/m1tafiS.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}