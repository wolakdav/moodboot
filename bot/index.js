const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if(message.content.startsWith(prefix)){
        CommandSelector(message);
    } 
});

function CommandSelector(msg){
    msg.channel.send("Valid command!");
}

client.login(token);


