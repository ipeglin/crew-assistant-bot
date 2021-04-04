module.exports = {
    name: "warn",
    cooldown: 5,
    description: "Display information about the server",
    args: true,
    usage: "<@user> [reason]",
    permissions: "KICK_MEMBERS",
    guildOnly: true,
    execute(message, args) {
        if (!message.mentions.users.size) return message.reply("You need to tag a user in order to warn them!");
        const taggedUser = message.mentions.users.first();
        let warningTag = "";
        for (let i of args) {
            if (i != args[0]) {
                warningTag += `${i} `;
            }
        }
        warningTag = warningTag.slice(0, -1);

        message.channel.bulkDelete(1, true).catch(err => {
            console.error(err);
            message.channel.send("There was an error trying to prune messages in this channel!");
        });
        
        message.channel.send(`**${taggedUser.username}** have been warned for: *${warningTag}*`)
    }
}