module.exports = {
    name: "echo",
    cooldown: 10,
    description: "ECHO! Echo! echo! echo ech...",
    args: true,
    usage: "<string>",
    permissions: "KICK_MEMBERS",
    guildOnly: true,
    execute(message, args) {
        let reply = args.map(word => word).join(" ");
        message.channel.send(reply);
    }
}