"use stirct"

class NegotiationController {

	constructor() {

		let $ = document.querySelector.bind(document);
		this._inputDate = $('#data');
		this._inputQuantity = $('#quantidade');
		this._inputAmount = $('#valor');
		this._negotiationList = new ListNegotiations();
		this._form = $('.form');

		this._negotiationsView = new NegotiationsView($('#tableView'));
		this._negotiationsView.update(this._negotiationList);
		
		this._message = new Message();
		this._messagesView = new MessagesView($('#messages'));
		this._messagesView.update(this._message);

	}

	add(event) {

		event.preventDefault();

		this._negotiationList.add(this._createNegotiation());
		this._message.text = 'The negotiation was created';
		this._messagesView.update(this._message);
		this._negotiationsView.update(this._negotiationList);
		this._resetForm();
	}

	delNegotiations() {
		this.listNegotiations.delNegotiations();
		this._negotiationsView.update(this._listNegotiations);

		this._message.text = 'All the negotiations were erased.";
		this._messageView.update(this._message);
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

