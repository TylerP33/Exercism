export const meetupDay =(year, month, weekDay, interval) => {
		let helperYear = year,
			helperMonth = month,
			daysKey = {
				"Sunday": 0,
				"Monday": 1,
				"Tuesday": 2,
				"Wednesday": 3,
				"Thursday": 4,
				"Friday": 5,
				"Saturday": 6,
			}

	function getDays(daysKey){
		var d = new Date(helperYear, helperMonth)
		let month = d.getMonth()
		let days = [];

		d.setDate(daysKey[weekDay])

		while (d.getDay() !== daysKey[weekDay]){
				d.setDate(d.getDate() + 1);
		}

		while (d.getMonth() === month){
			days.push(new Date(d.getTime()));
			d.setDate(d.getDate() + 7);
		}
		return days
	}

	let intervalKey = {
		'1st': getDays(daysKey)[0].getDate(),
		'2nd': getDays(daysKey)[1].getDate(),
		'3rd': getDays(daysKey)[2].getDate(),
	}

	if (interval === 'last' && getDays(daysKey).length === 5){
		return new Date(year, month, getDays(daysKey)[getDays(daysKey).length - 1].getDate())
	} else if (interval === 'last' || interval === '4th') {
		return new Date(year, month, getDays(daysKey)[3].getDate())
	} else if (interval === 'teenth') {
		return new Date(year, month, getDays(daysKey)[1].getDate())
	 }else if (interval === '5th') { 
		return new Date(year, month, getDays(daysKey)[4].getDate())
	} else if (interval) {
		return new Date(year, month, intervalKey[interval])
	} else{
		throw new Error()
	}
}

