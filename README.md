# Prerequisites #

A Linux/Windows/OSX server that's always running. (I host this program on a free google cloud debian server)

A Discord bot user (Create one [here](https://discordapp.com/developers/applications/ "Discord"))

A Twitter developer account (Apply for one [here](https://developer.twitter.com/en/apply-for-access.html "Twitter"))

# Running #

Install node.js (Download [here](https://nodejs.org/en/ "NodeJS"))

Navigate to the install folder with `cd`

Run the command `npm install`

Install these modules:

* `npm install request-promise-native`
* `npm install discord.js`
* `npm install twit`

Replace the `TYPEHERE` fields in settings.json in a text editor with all your API info.

Run `index.js`
(Optionally with something like PM2)

Invite the discord bot to your server using the following link (replace `BOTCLIENTIDHERE` with your client id in general info): 
https://discordapp.com/oauth2/authorize?client_id=BOTCLIENTIDHERE&scope=bot&permissions=0

You're good to go!
