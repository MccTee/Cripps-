module.exports = {
    name: 'Yarrow',
    description: 'Displays Yarrow location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Yarrow_')
        .setDescription("Red Dead Redemption 2 Yarrow is a collectable plant that can be harvested and gather, Can be crafted into a Potent Health Cure. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/HGeoTfV.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}