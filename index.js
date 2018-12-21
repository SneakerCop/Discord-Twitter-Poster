var Twitter = require('twit')
var Discord = require("discord.js")
var Request = require("request-promise-native")

var settings = require("./settings.json")

var client = new Twitter(settings.Twitter)

var bot = new Discord.Client()

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
})

bot.on("message", message => {
    if (message.channel.id === settings.Discord.channel_id) {
        message.attachments.forEach(Image => {
            var url = Image.url

            var promise = Request({
                uri: Image.proxyURL,
                encoding: null
            }).then(imageData => {

                client.post('media/upload', {
                    media: imageData.toString("base64")
                }, function(error, data, response) {
                    if (!error) {
                        var mediaIdStr = data.media_id_string
                        var meta_params = {
                            media_id: mediaIdStr,
                            alt_text: {
                                text: "Discord Image"
                            }
                        }

                        client.post("media/metadata/create", meta_params, function(err, data, response) {
                            if (!err) {
                                var params = {
                                    status: `New success by ${message.author.username}`,
                                    media_ids: [mediaIdStr]
                                }
                                client.post("statuses/update", params, function(err, data, response) {
                                    if (!err) {
                                        console.log(data)
                                    } else {
                                        throw err
                                    }
                                })
                            } else {
                                throw err
                            }
                        })
                    } else {
                        throw error
                    }
                })
            })
        })
    }
})

bot.login(settings.Discord.token)