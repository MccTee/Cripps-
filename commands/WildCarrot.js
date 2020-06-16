module.exports = {
    name: 'WildCarrot',
    description: 'Displays Wild Carrot location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Wild Carrot_')
        .setDescription("Red Dead Redemption 2 Wild Carrot is a collectable plant that can be harvested and gather, Can be crafted into a Horse Meal. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/Vvz8kXk.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}