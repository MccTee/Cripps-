module.exports = {
    name: 'Fox',
    description: 'Displays fox info',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const animalEmbed = new Discord.MessageEmbed()
        .setTitle('_Fox_')
        .setDescription("Red Dead Redemption 2 Fox can be hunted and skinned for crafting materials, it's a Medium sized Mammal animal. We recommend using a Rifle or a Sniper to hunt this animal. You can craft a Fox Claw Trinket at the Fence Shop using it's materials and cook the Stringy Meat meal from hunting it, American Red Fox, American Gray Fox, Silver Fox")
        .setImage('https://i.imgur.com/vHq6HvW.png')
        .setColor(0xCB4C3A)
    message.channel.send(animalEmbed)

    }
}