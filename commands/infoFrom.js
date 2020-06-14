module.exports = {
    name: 'infoFrom',
    description: "Shows from which sites it get's info",
    execute(message, args){
        
    const Discord = require('discord.js')

    const infoFromEmbed = new Discord.MessageEmbed()
        .setTitle("Where Cripps get it's information")
        .setColor(0xCB4C3A)
        .addField("-Madam Nazar:", "https://madamnazar.io")
        .addField("-Weekly set:", "https://jeanropke.github.io/RDR2CollectorsMap/")
        .addField("-Animal Maps:", "https://jeanropke.github.io/RDOMap/")
        .addField("-Animal Descriptions:", "https://rankedboost.com/red-dead-redemption-2/hunting-wildlife-fishing/ ; https://www.ign.com/wikis/red-dead-redemption-2/")
    message.channel.send(infoFromEmbed);

    }
}