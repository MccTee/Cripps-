module.exports = {
    name: 'PrairiePoppy',
    description: 'Displays Prairie Poppy location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Prairie Poppy_')
        .setDescription("Red Dead Redemption 2 Prairie Poppy is a collectable plant that can be harvested and gather, Can be crafted into Special Snake Oil. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/zxeYd9j.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}