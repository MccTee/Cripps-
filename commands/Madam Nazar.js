module.exports = {
    name: 'Madam Nazar',
    description: 'Info on Madam Nazar',
    execute(message, args){
    
    const Discord = require('discord.js');

    const fetch = require('node-fetch')

    let nazar = fetch('https://madam-nazar-location-api.herokuapp.com/location/current') 
        .then(res => res.json())
        .then(json => {
            const nazarEmbed = new Discord.MessageEmbed()
                .setTitle("Madam Nazar's Location")
                .setImage((json.data.location.image))
                .setColor(0xCB4C3A)
                .setDescription(`This location is for the ${json.dataFor}`)
            message.channel.send(nazarEmbed)
            });


    




    }
}