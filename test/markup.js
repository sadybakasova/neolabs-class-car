const {Markup} = require("telegraf")
module.exports.startKb = () => 
    Markup
    .keyboard([
            [ "Выбери день"]
        ])
        .resize()
module.exports.chooseNameKb = () => 
    Markup
    .keyboard([
            ['Понедельник','Вторник','Среда','Четверг'],
            ['Пятница','Суббота','Воскресенье',"Назад"]
        ])
        .resize()