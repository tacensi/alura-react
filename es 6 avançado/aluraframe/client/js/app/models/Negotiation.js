"use strict"

class Negotiation {

	constructor(date = new Date, quantity = 1, amount = 0.0) {

		this._date = new Date(date.getTime());
		this._quantity = quantity;
		this._amount = amount;

		Object.freeze(this);
	}

	get volume() {
		var volume = this._amount * this._quantity;
		return volume;
	}

	get date() {
		return new Date(this._date.getTime());
	}

	get quantity() {
		return this._quantity;
	}

	get amount() {
		return this._amount;
	}

}
