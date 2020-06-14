module.exports = {
    name: 'Bear',
    description: 'Displays bear info',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const animalEmbed = new Discord.MessageEmbed()
        .setTitle('_Bear_')
        .setDescription("Red Dead Redemption 2 Bear can be hunted and skinned for crafting materials, it's a Massive sized Mammal animal. We recommend using a Rifle or a Sniper to hunt this animal. You can craft a Bear Claw Talisman at the Fence Shop using it's materials and cook the Big Game meal from hunting it, American Black Bear, Grizzly Bear")
        .setImage('https://i.imgur.com/kIG8TJb.png')
        .setColor(0xCB4C3A)
    message.channel.send(animalEmbed)

    }
}
