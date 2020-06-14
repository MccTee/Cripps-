module.exports = {
    name: 'Deer',
    description: 'Displays deer info',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const animalEmbed = new Discord.MessageEmbed()
        .setTitle('_Deer_')
        .setDescription("Red Dead Redemption 2 Deer can be hunted and skinned for crafting materials, it's a Large sized Mammal animal. We recommend using a Rifle or a Sniper to hunt this animal. You can craft a at the Trapper Shop using it's materials and cook the meal from hunting it, Whitetail Deer")
        .setImage('https://i.imgur.com/QAbCkkh.png')
        .setColor(0xCB4C3A)
    message.channel.send(animalEmbed)

    }
}