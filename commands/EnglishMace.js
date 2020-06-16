module.exports = {
    name: 'EnglishMace',
    description: 'Displays English Mace location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_English Mace_')
        .setDescription("Red Dead Redemption 2 English Mace is a collectable plant that can be harvested and gather, Can be used to craft a Special Health Cure. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/B51ozrU.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}