"use stirct"

class NegotiationController {

	constructor() {

		let $ = document.querySelector.bind(document);
		this._inputDate = $('#data');
		this._inputQuantity = $('#quantidade');
		this._inputAmount = $('#valor');
		this._negotiationList = new ListNegotiations();
		this._form = $('.form');

	}

	add(event) {

		event.preventDefault();

		this._negotiationList.add(this._createNegotiation());

		console.log(this._negotiationList.negotiations);
		this._resetForm();
	}

	_createNegotiation() {
		return new Negotiation (
			DateHelper.StrToDate(this._inputDate.value),
			this._inputQuantity.value,
			this._inputAmount.value
		);
	}

	_resetForm() {
		this._form.reset();
		this._inputDate.focus();
	}

}

