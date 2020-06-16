module.exports = {
    name: 'AmericanGinseng',
    description: 'Displays American Ginseng location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_American Ginseng_')
        .setDescription("Red Dead Redemption 2 American Ginseng is a collectable plant that can be harvested and gather, Can be crafted into a Potent Miracle Tonic. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/VczdicC.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}