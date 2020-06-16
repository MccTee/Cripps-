module.exports = {
    name: 'DesertSage',
    description: 'Displays Desert Sage location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Desert Sage_')
        .setDescription("Red Dead Redemption 2 Desert Sage is a collectable plant that can be harvested and gather, Can be crafted into a Horse Ointment. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/cLSgz73.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}