module.exports = {
    name: "user-info",
    description: "Display information about the server",
    execute(message, args) {
        message.channel.send(`Your username: ${message.author.username}\nYour tag: ${message.author.tag}\nYour ID: ${message.author.id}`);
    }
}