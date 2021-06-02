const bot=require ('./bootstrap')
const { nameOfDays, days, monday, thursday, wednesday, tuesday, friday, saturday, sunday} = require("./weather")
const { startKb,chooseNameKb} = require("./markup")


bot.start(ctx => ctx.reply(
    'Hello',
    startKb()
))



bot.hears("Понедельник", ctx => ctx.reply
(monday[Math.floor(Math.random() * monday.length)]
))

bot.hears("Вторник", ctx => ctx.reply
(thursday[Math.floor(Math.random() * thursday.length)]
))

bot.hears("Среда", ctx => ctx.reply
(wednesday[Math.floor(Math.random() * wednesday.length)]
))

bot.hears("Четверг", ctx => ctx.reply
(tuesday[Math.floor(Math.random() * tuesday.length)]
))

bot.hears("Пятница", ctx => ctx.reply
(friday[Math.floor(Math.random() * friday.length)]
))

bot.hears("Суббота", ctx => ctx.reply
(saturday[Math.floor(Math.random() * saturday.length)]
))

bot.hears("Воскресенье", ctx => ctx.reply
(sunday[Math.floor(Math.random() * sunday.length)]
))


bot.hears("Выбери день", ctx => ctx.reply("Выбери день:", chooseNameKb()))

bot.hears("Назад", ctx => ctx.reply("Ok", startKb()))

bot.hears(days, ctx => ctx.reply (nameOfDays(ctx.message.text).join("\n")))

bot.hears("На всю неделю", ctx => ctx.reply (Object.values(weather).join("\n\n").split(",").join("\n")))








