module.exports = {
    name: 'CommonBulrush',
    description: 'Displays Common Bulrush location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Common Bulrush_')
        .setDescription("Red Dead Redemption 2 Common Bulrush is a collectable plant that can be harvested and gather, Can be crafted into a Horse Ointment. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/OMqmw1d.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}