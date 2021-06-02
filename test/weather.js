module.exports.monday = ['Бишкек=день-29-33','ночь-25- 29','солнечно']
module.exports.tuesday = ['Бишкек=день-25-26','ночь-23- 25','прохладно']
module.exports.wednesday = ['Бишкек=день-30-35','ночь-29- 32']
module.exports.thursday = ['Бишкек=день-15-21','ночь-13- 18','местами дожди']
module.exports.friday = ['Бишкек=день-26-36','ночь-25- 29','солнечно+']
module.exports.saturday = ['Бишкек=день-32-33','ночь-25- 31']
module.exports.sunday = ['Бишкек=день-29-33','ночь-25- 29','+солнечно']

// module.exports.weather={
//     monday:['Бишкек=день-29-33','ночь-25- 29','солнечно'],
//     tuesday:['Бишкек=день-25-26','ночь-23- 25','прохладно'],
//     wednesday:  ['Бишкек=день-30-35','ночь-29- 32'],
//     thursday:['Бишкек=день-15-21','ночь-13- 18','местами дожди'],
//     friday:['Бишкек=день-26-36','ночь-25- 29','солнечно+'],
//     sunday:['Бишкек=день-32-33','ночь-25- 31'],
//     saturday:['Бишкек=день-29-33','ночь-25- 29','+солнечно']

// }
module.exports.days=['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье']

module.exports.nameOfDays=(day)=>{
    const filtered=Object.keys(this.weather).filter(key=>this.weather[key][0]==day)
        return filtered[0]? this.weather[filtered[0]].join('\n'):'такой день не найден'
    }








