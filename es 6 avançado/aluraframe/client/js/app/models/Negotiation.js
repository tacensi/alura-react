"use strict"


/**
 * Class negotiation
 **/
class Negotiation {

	constructor(date = new Date, quantity = 1, amount = 0.0) {

		this._date = new Date(date.getTime());
		this._quantity = quantity;
		this._amount = amount;

		// Freezes the object to avoid tampering,
		// providing a faux protected variables
		Object.freeze(this);
	}

	get volume() {
		var volume = this._amount * this._quantity;
		return volume;
	}

	/**
	 * Getter function for date
	 **/
	get date() {
		return new Date(this._date.getTime());
	}

	/**
	 * Getter function for quantity
	 **/
	get quantity() {
		return this._quantity;
	}

	/**
	 * Getter function for amount
	 **/
	get amount() {
		return this._amount;
	}

}
