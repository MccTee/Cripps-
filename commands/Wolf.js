module.exports = {
    name: 'Wolf',
    description: 'Displays wolf info',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const animalEmbed = new Discord.MessageEmbed()
        .setTitle('_Wolf_')
        .setDescription("Red Dead Redemption 2 Wolf can be hunted and skinned for crafting materials, it's a Large sized Mammal animal. We recommend using a Rifle or a Sniper to hunt this animal. You can craft a Wolf Heart Trinket at the Fence Shop using it's materials and cook the Big Game meal from hunting it, Gray Wolf, Timber Wolf")
        .setImage('https://i.imgur.com/4McAYT0.png')
        .setColor(0xCB4C3A)
    message.channel.send(animalEmbed)

    }
}