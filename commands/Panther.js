module.exports = {
    name: 'Panther',
    description: 'Displays panther info',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const animalEmbed = new Discord.MessageEmbed()
        .setTitle('_Panther_')
        .setDescription("Red Dead Redemption 2 Panther can be hunted and skinned for crafting materials, it's a Large sized Mammal animal. We recommend using a Rifle or a Sniper to hunt this animal. You can craft a Panther's Eye Trinket at the Fence Shop using it's materials and cook the Big Game meal from hunting it, Panther, Florida Panther")
        .setImage('https://i.imgur.com/udSatW1.png')
        .setColor(0xCB4C3A)
    message.channel.send(animalEmbed)

    }
}