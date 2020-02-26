"use strict";

class DateHelper {

	construct() {

		throw new Error( 'Class DateHelper should not be called directly');

	}

	static DateToString(date) {
		return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
	}

	static StrToDate(string) {

		if (!/^\d{4}-\d{2}-\d{2}$/.test(string)) {
			throw new Error('Date should be a string in format YYYY-mm-dd.');
		}

		return new Date(
			...string
				.split('-')
				.map((item, index) => item - index % 2)
		);
	}

}

