const Discord = require('discord.js');
const {Client, MessageAttachment} = require('discord.js');
const bot = new Client();

const PREFIX = '!'

const fs = require('fs');
    
    bot.commands = new Discord.Collection();

        const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
        for(const file of commandFiles){
            const command = require(`./commands/${file}`);

            bot.commands.set(command.name, command);
        }


bot.on('ready', () =>{
    console.log('RDR2 bot is online')
    bot.user.setActivity('Red Dead Help');     
})

bot.login(porcess.env.token);

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

        switch (args[0]) {

            case "nazar":
                bot.commands.get('Madam Nazar').execute(message, args);
            break;

            case "weeklySet":
                bot.commands.get('Weekly Set').execute(message, args);
            break;

//ANIMALS ANIMALS ANIMALS ANIMALS ANIMALS ANIMALS ANIMALS ANIMALS ANIMALS ANIMALS ANIMALS ANIMALS ANIMALS ANIMALS

            case "alligator":
                bot.commands.get('Aligator').execute(message, args);
            break;
            
            case "bear":
                bot.commands.get('Bear').execute(message, args);
            break;

            case "bison":
                bot.commands.get('Bison').execute(message, args);
            break;

            case "blackBear":
                bot.commands.get('BlackBear').execute(message, args);
            break;

            case "buck":
                bot.commands.get('Buck').execute(message, args);
            break;

            case "cougar":
                bot.commands.get('Cougar').execute(message, args);
            break;

            case "coyote":
                bot.commands.get('Coyote').execute(message, args);
            break;

            case "deer":
                bot.commands.get('Deer').execute(message, args);
            break;

            case "elk":
                bot.commands.get('Elk').execute(message, args);
            break;

            case "fox":
                bot.commands.get('Fox').execute(message, args);
            break;

            case "moose":
                bot.commands.get('Moose').execute(message, args);
            break;

            case "panther":
                bot.commands.get('Panther').execute(message, args);
            break;

            case "pronghorn":
                bot.commands.get('Pronghorn').execute(message, args);
            break;

            case "ram":
                bot.commands.get('ram').execute(message, args);
            break;

            case "turtle":
                bot.commands.get('Turtle').execute(message, args);
            break;

            case "wolf":
                bot.commands.get('Wolf').execute(message, args);
            break;
            
//PLANTS PLANTS PLANTS PLANTS PLANTS PLANTS PLANTS PLANTS PLANTS PLANTS PLANTS PLANTS PLANTS PLANTS PLANTS PLANTS
            
            case "alaskanGinseng":
                bot.commands.get('AlaskanGinseng').execute(message, args);
            break;

            case "americanGinseng":
                bot.commands.get('AmericanGinseng').execute(message, args);
            break;

            case "blackCurrant":
                bot.commands.get('BlackCurrant').execute(message, args);
            break;

            case "blackberry":
                bot.commands.get('Blackberry').execute(message, args);
            break;

            case "burdockRoot":
                bot.commands.get('BurdockRoot').execute(message, args);
            break;

            case "commonBulrush":
                bot.commands.get('CommonBulrush').execute(message, args);
            break;

            case "creepingThyme":
                bot.commands.get('CreepingThyme').execute(message, args);
            break;

            case "desertSage":
                bot.commands.get('DesertSage').execute(message, args);
            break;

            case "englishMace":
                bot.commands.get('EnglishMace').execute(message, args);
            break;

            case "evergreenHuckleberry":
                bot.commands.get('EvergreenHuckleberry').execute(message, args);
            break;

            case "goldenCurrant":
                bot.commands.get('GoldenCurrant').execute(message, args);
            break;

            case "hummingbirdSage":
                bot.commands.get('HummingbirdSage').execute(message, args);
            break;

            case "indianTobacco":
                bot.commands.get('IndianTobacco').execute(message, args);
            break;

            case "milkweed":
                bot.commands.get('Milkweed').execute(message, args);
            break;

            case "oleanderSage":
                bot.commands.get('OleanderSage').execute(message, args);
            break;

            case "oregano":
                bot.commands.get('Oregano').execute(message, args);
            break;

            case "parasolMushroom":
                bot.commands.get('ParasolMushroom').execute(message, args);
            break;

            case "prairiePoppy":
                bot.commands.get('PrairiePoppy').execute(message, args);
            break;

            case "ramsHead":
                bot.commands.get('RamsHead').execute(message, args);
            break;

            case "redRaspberry":
                bot.commands.get('RedRaspberry').execute(message, args);
            break;

            case "redSage":
                bot.commands.get('RedSage').execute(message, args);
            break;

            case "vanillaFlower":
                bot.commands.get('VanillaFlower').execute(message, args);
            break;

            case "violetSnowdrop":
                bot.commands.get('VioletSnowdrop').execute(message, args);
            break;

            case "wildCarrot":
                bot.commands.get('WildCarrot').execute(message, args);
            break;

            case "wildFeverfew":
                bot.commands.get('WildFeverfew').execute(message, args);
            break;

            case "wildMint":
                bot.commands.get('WildMint').execute(message, args);
            break;

            case "wintergreenBerry":
                bot.commands.get('WintergreenBerry').execute(message, args);
            break;

            case "yarrow":
                bot.commands.get('Yarrow').execute(message, args);
            break;

            case "chanterelles":
                bot.commands.get('Chanterelles').execute(message, args);
            break;

            case "bayBolete":
                bot.commands.get('BayBolete').execute(message, args);
            break;

//HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP 
            
            case "infoFrom":
                bot.commands.get('infoFrom').execute(message, args);
            break;

            case "commands":
                bot.commands.get('Commands').execute(message, args);
            break;



    
    }
});


