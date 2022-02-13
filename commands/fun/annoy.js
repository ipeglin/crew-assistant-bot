module.exports = {
    name: "annoy",
    cooldown: 86400,
    description: "Annoy your Discord friends",
    args: true,
    usage: "<@user>",
    permissions: "KICK_MEMBERS",
    guildOnly: true,
    execute(message, args) {
        const amountOfMessages = (5 + Math.floor(Math.random() * 15));

        if (!message.mentions.users.size) return message.reply("You need to tag a user!");
        const taggedUser = message.mentions.users.first();

        let Sent = 0;
        const spamInterval = setInterval(() => {
            taggedUser.send(`Are you annoyed yet, <@${taggedUser.id}>?`, { split: true })
                .then(() => console.log(`${taggedUser.username} was annoyed ${Sent} time(s)`))
                .catch((error) => console.error(`Could not annoy user: ${taggedUser.displayName}`))
            
            Sent++;
            if (Sent >= amountOfMessages) return clearInterval(spamInterval);
        }, (500 + Math.floor(Math.random() * 2000)));
    }
}