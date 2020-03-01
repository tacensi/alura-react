"use strict"

class NegotiationsView extends View {
	

	template(model) {

		return `
			<table class="table table-hover table-bordered">
				<thead>
					<tr>
						<th>DATA</th>
						<th>QUANTIDADE</th>
						<th>VALOR</th>
						<th>VOLUME</th>
					</tr>
				</thead>

				<tbody>
					${model.negotiations.map(n => `
						<tr>
							<td>${DateHelper.DateToString(n.date)}</td>
							<td>${n.quantity}</td>
							<td>${n.amount}</td>
							<td>${n.volume}</td>
						</tr>
						`
					).join('')}
				</tbody>

				<tfoot>
					<tr>
						<td colspan="3"></td>
						<td>${model.negotiations.reduce((total, n) => total + n.volume, 0.0)}</td>
					<tr>
				</tfoot>
			</table>
		`

	}

}
