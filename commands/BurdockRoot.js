module.exports = {
    name: 'BurdockRoot',
    description: 'Displays Burdock Root location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Burdock Root_')
        .setDescription("Red Dead Redemption 2 Burdock Root is a collectable plant that can be harvested and gather, Can be crafted into Special Bitters. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/fUqnUXA.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}