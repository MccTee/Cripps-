module.exports = {
    name: 'OleanderSage',
    description: 'Displays Oleander Sage location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Oleander Sage_')
        .setDescription("Red Dead Redemption 2 Oleander Sage is a collectable plant that can be harvested and gather, Can be used to craft a Poison Throwing Knife. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/pD4B6rf.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}