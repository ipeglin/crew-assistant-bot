//  Require the discord.js module
const Discord = require("discord.js");

const { prefix, token } = require("./config.json");

//  Create a new Discord client
const client = new Discord.Client();

// Config dotenv to link the token in .env to process.env
// index.js
const dotenv = require('dotenv');
dotenv.config();

// When the client is ready, run this code
// This event will only trigger once after logging in since it is a promise
client.once("ready", () => {
    console.log("Ready!");
});

/*
// Login to Discord with the app's token from process.env
// ... client setup (keep reading)
client.login(process.env.TOKEN);
*/




/* LISTENING FOR MESSAGES */

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        message.channel.send("Pong.");
    } else if (command === "beep") {
        message.channel.send("Boop.");
    }
});

/*

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "baba") {
        message.channel.send("Siktir git, orospu çocuğu!");
    } else if (command === "server") {
        message.channel.send(`This server's name is ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nRegion: ${message.guild.region}`);
    } else if (command === "user-info") {
        message.channel.send(`Your username: ${message.author.username}\nYour tag: ${message.author.tag}\nYour ID: ${message.author.id}`);
    } else if (command === "args-info") {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        } else if (args[0] === "foo") {
            return message.channel.send("bar");
        }
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    } else if (command === "warn") {
        if (!message.mentions.users.size) return message.reply("You need to tag a user in order to warn them!");
        const taggedUser = message.mentions.users.first();
        let warningTag = "";
        for (let i of args) {
            if (i != args[0]) {
                warningTag += `${i} `;
            }
        }
        warningTag = warningTag.slice(0, -1);
        
        message.channel.send(`**${taggedUser.username}** have been warned for: *${warningTag}*`)
    } else if (command === "avatar") {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });

        message.channel.send(avatarList);
    } else if (command === "prune") {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply("That doesn't seem to be a valid number.");
        } else if (amount <= 1 || amount > 100) {
            return message.reply("You need to input a number between 2 and 99.")
        }
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send("There was an error trying to prune messages in this channel!");
        });
    }
})
*/

client.login(token);