module.exports = {
    name: 'WintergreenBerry',
    description: 'Displays Wintergreen Berry location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Wintergreen Berry_')
        .setDescription("Red Dead Redemption 2 Wintergreen Berry is a collectable plant that can be harvested and gather, Can be crafted into a Potent Predator Bait. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/rd5cBI2.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}