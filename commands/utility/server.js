module.exports = {
    name: "server",
    cooldown: 5,
    description: "Display information about the server",
    guildOnly: true,
    execute(message, args) {
        message.channel.send(`This server's name is ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nRegion: ${message.guild.region}`);
    }
}