module.exports = {
    name: "warn",
    description: "Display information about the server",
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
        
        message.channel.send(`**${taggedUser.username}** have been warned for: *${warningTag}*`)
    }
}