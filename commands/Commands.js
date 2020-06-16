module.exports = {
    name: 'Commands',
    description: 'Displays AlaskanGinseng location',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const helpEmbed = new Discord.MessageEmbed()
        .setTitle('_Commands_')
        .setDescription("The commands for Cripps are pretty simple, just type `!` and then the animal/plant/person that you are looking for. If the thing you are looking for has multiple words, make sure to write them together with the first word lowercase and the rest with the starting letter uppercase")
        .addField("Example 1:", "`!alligator`")
        .addField("Example 2:", "`!americanGinseng`")
        .setColor(0xCB4C3A)
    message.channel.send(helpEmbed)

    }
}