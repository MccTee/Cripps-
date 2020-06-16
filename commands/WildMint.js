module.exports = {
    name: 'WildMint',
    description: 'Displays Wild Mint location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Wild Mint_')
        .setDescription("Red Dead Redemption 2 Wild Mint is a collectable plant that can be harvested and gather, Can be used in the Minty Prime Beef recipe. Plants can be potentially crafted into seasonings for cooking, poison weapons, medicine, tonics and elixirs at a Campfire using Pamphlet recipes")
        .setImage('https://i.imgur.com/75cgaBl.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}