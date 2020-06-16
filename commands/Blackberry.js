module.exports = {
    name: 'Blackberry',
    description: 'Displays Blackberry location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Blackberry_')
        .setDescription("Red Dead Redemption 2 Blackberry is a collectable plant that can be harvested and gather, Can be crafted into a Potent Predator Bait. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/d3OJdjp.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}