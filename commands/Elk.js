module.exports = {
    name: 'Elk',
    description: 'Displays elk info',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const animalEmbed = new Discord.MessageEmbed()
        .setTitle('_Elk_')
        .setDescription("Red Dead Redemption 2 Elk can be hunted and skinned for crafting materials, it's a Massive sized Mammal animal. We recommend using a Rifle or a Sniper to hunt this animal. You can craft a Elk Antler Trinket at the Fence Shop using it's materials and cook the Mature Venison meal from hunting it, Rocky Mountain Bull Elk, Rocky Mountain Cow Elk")
        .setImage('https://i.imgur.com/aPYm83S.png')
        .setColor(0xCB4C3A)
    message.channel.send(animalEmbed)

    }
}