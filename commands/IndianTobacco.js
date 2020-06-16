module.exports = {
    name: 'IndianTobacco',
    description: 'Displays Indian Tobacco location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Indian Tobacco_')
        .setDescription("Red Dead Redemption 2 Indian Tobacco is a collectable plant that can be harvested and gather, Can be used to craft a Potent Miracle Tonic. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/ulxSv3n.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}