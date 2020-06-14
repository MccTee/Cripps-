module.exports = {
    name: 'Aligator',
    description: 'Displays aligator location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const animalEmbed = new Discord.MessageEmbed()
        .setTitle('_Alligator_')
        .setDescription("Red Dead Redemption 2 Alligator can be hunted and skinned for crafting materials, it's a Massive sized Reptile animal. We recommend using a Rifle or a Sniper to hunt this animal. You can craft a Alligator Tooth Talisman at the Fence Shop using it's materials and cook the Big Game meal from hunting it, American Alligator, American Alligator (small)")
        .setImage('https://i.imgur.com/FtVjFQz.png')
        .setColor(0xCB4C3A)
    message.channel.send(animalEmbed)

    }
}
