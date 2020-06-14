module.exports = {
    name: 'Pronghorn',
    description: 'Displays pronghorn info',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const animalEmbed = new Discord.MessageEmbed()
        .setTitle('_Pronghorn_')
        .setDescription("The American Pronghorn Dpe is native to the wide open grasslands of New Hanover and West Elizabeth. As herbivores, their diet includes sagebrush, green shoots, grasses and forbs. As a large animal, a high impact weapon is neeeded when hunting. The most popular weapons used when hunting are rifles and Bows with Poison Arrows. Pronghorn skin can be used for crafting, and their meat can be used for cooking")
        .setImage('https://i.imgur.com/mI5J9RP.png')
        .setColor(0xCB4C3A)
    message.channel.send(animalEmbed)

    }
}