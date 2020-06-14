module.exports = {
    name: 'BlackBear',
    description: 'Displays black bear info',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const animalEmbed = new Discord.MessageEmbed()
        .setTitle('_Black Bear_')
        .setDescription("Red Dead Redemption 2 Black Bear can be hunted and skinned for crafting materials, it's a Massive sized Mammal animal. We recommend using a Rifle or a Sniper to hunt this animal. You can craft a at the Trapper Shop using it's materials and cook the meal from hunting it")
        .setImage('https://i.imgur.com/g7sagJi.png')
        .setColor(0xCB4C3A)
    message.channel.send(animalEmbed)

    }
}