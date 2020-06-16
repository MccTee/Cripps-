module.exports = {
    name: 'EvergreenHuckleberry',
    description: 'Displays Evergreen Huckleberry location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const plantEmbed = new Discord.MessageEmbed()
        .setTitle('_Evergreen Huckleberry_')
        .setDescription("Evergreen Huckleberry shrubs can be recognized by the sharp evergreeen leaves and black berries. The shrubs be found along the Kamassa River that runs through Lemoyne and New Hanover. The berries can be consumed to replenish your Health Core or crafted into Predator Bait")
        .setImage('https://i.imgur.com/KWchFlk.png')
        .setColor(0xCB4C3A)
    message.channel.send(plantEmbed)

    }
}