module.exports = {
    name: 'CreepingThyme',
    description: 'Displays Creeping Thyme location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Creeping Thyme_')
        .setDescription("Red Dead Redemption 2 Creeping Thyme is a collectable plant that can be harvested and gather, Can be used in the Thyme Big Game recipe. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/l7j2pPc.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}