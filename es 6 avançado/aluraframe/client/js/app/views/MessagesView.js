"use strict"

class MessagesView extends View {

	template(model) {
		return model.text ? `<p class="alert alert-info">${model.text}</p>` : '';
	}

}
