const discordBotkit = require("botkit-discord");

const configuration = {
  token: "Nzg0ODAzNjU5NzQ1NDYwMjI1.YBdQbg.qMMAinS8NSG0rsfBWknnwY7wWNY"
};

const discordBot = discordBotkit(configuration);
var normalizedPath = require("path").join(__dirname, "skills");

require("fs")
  .readdirSync(normalizedPath)
  .forEach(function(file) {
    require("./skills/" + file)(discordBot);
  });

module.exports = discordBot;
