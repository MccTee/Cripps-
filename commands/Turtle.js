module.exports = {
    name: 'Turtle',
    description: 'Displays turtle info',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const animalEmbed = new Discord.MessageEmbed()
        .setTitle('_Turtle_')
        .setDescription("Red Dead Redemption 2 Turtle can be hunted and skinned for crafting materials, it's a Large sized Reptile animal. We recommend using a Rifle or a Sniper to hunt this animal. You can cook the Herptile Meat meal from hunting it, Alligator Snapping Turtle")
        .setImage('https://i.imgur.com/noBMAAX.png')
        .setColor(0xCB4C3A)
    message.channel.send(animalEmbed)

    }
}