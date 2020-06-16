module.exports = {
    name: 'Chanterelles',
    description: 'Displays Chanterelles location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Chanterelles_')
        .setDescription("Red Dead Redemption 2 Chanterelles is a collectable plant that can be harvested and gather, Can be crafted into a Potent Herbivore Bait. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/n27GgoX.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}