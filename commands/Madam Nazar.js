module.exports = {
    name: 'Madam Nazar',
    description: 'Info on Madam Nazar',
    execute(message, args){
    
    const Discord = require('discord.js');
    
    const snekfetch = require('snekfetch');

            snekfetch.get('https://madam-nazar-location-api.herokuapp.com/location/current')
                .then(r => {
                    let image = r.body.data.location.image
                    let date = r.body.dataFor
                    let regionName = r.body.data.location.region.name
                    let regionPrecise = r.body.data.location.region.precise
            
                snekfetch.get('https://jeanropke.github.io/RDR2CollectorsMap/data/weekly.json?nocache=1455')
                    .then(r =>{
                        let body = r.body
                        let currentSet = body.current 
                    if(currentSet.includes("_")) currentSet = currentSet.replace(/_/g, " ")
                
            const nazarEmbed = new Discord.MessageEmbed()
                .setTitle(`Madam Nazar's location for the ${date}`)
                .setDescription(`This weeks set is the ${currentSet}`)
                .setImage(image)
                .setColor(0xCB4C3A)
            message.channel.send(nazarEmbed)
                })
        });
        
           
    }
}