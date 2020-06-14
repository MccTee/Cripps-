module.exports = {
    name: 'Cougar',
    description: 'Displays cougar info',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const animalEmbed = new Discord.MessageEmbed()
        .setTitle('_Cougar_')
        .setDescription("Red Dead Redemption 2 Cougar can be hunted and skinned for crafting materials, it's a Large sized Mammal animal. We recommend using a Rifle or a Sniper to hunt this animal. You can craft a Cougar's Paw Trinket at the Fence Shop using it's materials and cook the Big Game meal from hunting it")
        .setImage('https://i.imgur.com/Wqmsux2.png')
        .setColor(0xCB4C3A)
    message.channel.send(animalEmbed)

    }
}