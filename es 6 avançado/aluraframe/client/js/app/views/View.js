"use strict";

class View {

	// Constructor
	constructor(element) {
		this._element = element;
	}

	// Template method throws an error if it is not implemented in the child
	// class
	template() {
		throw new Error('Teplate method must be implemented in the child class');
	}

	update(model) {
		this._element.innerHTML = this.template(model);
	}
}
