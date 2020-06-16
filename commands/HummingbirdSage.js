module.exports = {
    name: 'HummingbirdSage',
    description: 'Displays Hummingbird Sage location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Hummingbird Sage_')
        .setDescription("Red Dead Redemption 2 Hummingbird Sage is a collectable plant that can be harvested and gather, Can be consumed to refill your Stamina Core. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/UKYyjYl.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}