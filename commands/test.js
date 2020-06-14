module.exports = {
    name: 'test',
    description: 'test',
    execute(message, args){
        
    const Discord = require('discord.js')
    
    const snekfetch = require('snekfetch')

    snekfetch.get('https://tiles.arcgis.com/tiles/N9p5hsImWXAccRNI/arcgis/rest/services/CPVtile/VectorTileServer/resources/styles/root.json?f=json')
        .then(r => console.log(r.body))

    }
}