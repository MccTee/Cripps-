module.exports = {
    name: 'VioletSnowdrop',
    description: 'Displays Violet Snowdrop location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Violet Snowdrop_')
        .setDescription("Red Dead Redemption 2 Violet Snowdrops is a collectable plant that can be harvested and gather, Can be crafted into a Potent Herbivore Bait. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/ObNfPWF.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}