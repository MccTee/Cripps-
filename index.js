const Discord = require('discord.js');

const bot = new Discord.Client();

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

bot.login(process.env.token);

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

        switch (args[0]) {

            case "nazar":
                bot.commands.get('Madam Nazar').execute(message, args);
            break;

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

            case "infoFrom":
                bot.commands.get('infoFrom').execute(message, args);
            break;

    
    }
});


