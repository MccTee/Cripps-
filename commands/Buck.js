module.exports = {
    name: 'Buck',
    description: 'Displays buck info',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const animalEmbed = new Discord.MessageEmbed()
        .setTitle('_Buck_')
        .setDescription("Red Dead Redemption 2 Buck can be hunted and skinned for crafting materials, it's a Large sized Mammal animal. We recommend using a Rifle or a Sniper to hunt this animal. You can craft a Buck Antler Trinket at the Fence Shop using it's materials and cook the meal from hunting it")
        .setImage('https://i.imgur.com/gC8ucfQ.png')
        .setColor(0xCB4C3A)
    message.channel.send(animalEmbed)

    }
}