module.exports = {
    name: 'ram',
    description: 'Displays ram info',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const animalEmbed = new Discord.MessageEmbed()
        .setTitle('_Ram_')
        .setDescription("Red Dead Redemption 2 Ram can be hunted and skinned for crafting materials, it's a Large sized Mammal animal. We recommend using a Rifle or a Sniper to hunt this animal. You can craft a Ram Horn Trinket at the Fence Shop using it's materials and cook the Gristly Mutton meal from hunting it, Sierra Nevada Bighorn Ram, Sierra Nevada Bighorn Sheep, Desert Bighorn Ram, Desert Bighorn Sheep, Rocky Mountain Bighorn Ram, Rocky Mountain Bighorn Sheep")
        .setImage('https://i.imgur.com/NjNFbPZ.png')
        .setColor(0xCB4C3A)
    message.channel.send(animalEmbed)

    }
}