Date.prototype.getWeekOfMonth = function(exact) {
        var month = this.getMonth()
            , year = this.getFullYear()
            , firstWeekday = new Date(year, month, 1).getDay()
            , lastDateOfMonth = new Date(year, month + 1, 0).getDate()
            , offsetDate = this.getDate() + firstWeekday - 1
            , index = 1 
            , weeksInMonth = index + Math.ceil((lastDateOfMonth + firstWeekday - 7) / 7)
            , week = index + Math.floor(offsetDate / 7)
        ;
        if(this.getDay() == 0) week = week - 1;
        if (exact || week < 2 + index) return week;
        return week === weeksInMonth + 1 ? index + 5 : week;
    };




function getDayInfo(date) {
	let days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
	let month = [
		'Января',
		'Февраля',
		'Марта',
		'Апреля',
		'Мая',
		'Июня',
		'Июля',
		'Августа',
		'Сентября',
		'Октября',
		'Ноября',
		'Декабря',
	];
	if(typeof date === 'object') {
		return `${days[date.getDay()]} ${date.getWeekOfMonth()} неделя ${month[date.getMonth()]} ${date.getFullYear()} года`
	}else if(typeof date === 'string') {
		let dt = date.split('.');
		date = new Date(`${dt[1]}.${dt[0]}.${dt[2]}`);
		return `${days[date.getDay()]} ${date.getWeekOfMonth()} неделя ${month[date.getMonth()]} ${date.getFullYear()} года`
	};
}
