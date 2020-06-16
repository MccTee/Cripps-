module.exports = {
    name: 'Oregano',
    description: 'Displays Oregano location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Oregano_')
        .setDescription("Red Dead Redemption 2 Oregano is a collectable plant that can be harvested and gather, Can be used in the Oregano Plump Bird recipe. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/VkLTPYC.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}