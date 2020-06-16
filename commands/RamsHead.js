module.exports = {
    name: 'RamsHead',
    description: 'Displays Rams Head location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Rams Head_')
        .setDescription("Ram's Head can be identified by the clustered formation. This type of fungi can be found growing at the bottom of tree trunks in woodlands and forests in West Elizabeth and Ambarino. Furthermore, this type of fungi can be used as Herbivore Bait or consumed by the player to help replenish their Health Core")
        .setImage('https://i.imgur.com/UPLsLpn.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}