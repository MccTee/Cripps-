module.exports = {
    name: 'Coyote',
    description: 'Displays coyote info',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const animalEmbed = new Discord.MessageEmbed()
        .setTitle('_Coyote_')
        .setDescription("Red Dead Redemption 2 Coyote can be hunted and skinned for crafting materials, it's a Medium sized Mammal animal. We recommend using a Rifle or a Sniper to hunt this animal. You can craft a Coyote Fang Trinket at the Fence Shop using it's materials and cook the Stringy Meat meal from hunting it, California Valley Coyote")
        .setImage('https://i.imgur.com/QSEAWZ7.png')
        .setColor(0xCB4C3A)
    message.channel.send(animalEmbed)

    }
}