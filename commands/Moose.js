module.exports = {
    name: 'Moose',
    description: 'Displays moose info',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const animalEmbed = new Discord.MessageEmbed()
        .setTitle('_Moose_')
        .setDescription("Red Dead Redemption 2 Moose can be hunted and skinned for crafting materials, it's a Massive sized Mammal animal. We recommend using a Rifle or a Sniper to hunt this animal. You can craft a Moose Antler Trinket at the Fence Shop using it's materials and cook the Mature Venison meal from hunting it, Western Bull Moose, Western Moose")
        .setImage('https://i.imgur.com/a8AZDnK.png')
        .setColor(0xCB4C3A)
    message.channel.send(animalEmbed)

    }
}