module.exports = {
    name: 'Weekly Set',
    description: 'Shows weekly sets',
    execute(message, args){
    
    const Discord = require('discord.js');

    const fetch = require('node-fetch')

    let currentSet = fetch('https://jeanropke.github.io/RDR2CollectorsMap/data/weekly.json?nocache=1465') 
        .then(res => res.json())
        .then(json => {
            const setEmbed = new Discord.MessageEmbed()
                .setTitle(`**Weekly Set**`)
                .setDescription(`This week's set is the ${json.current}`)
                .setColor(0xCB4C3A)
            message.channel.send(setEmbed)
        })
    




    }
}