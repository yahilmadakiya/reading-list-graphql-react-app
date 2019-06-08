import React, { Component } from "react";

class BookList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<ul id="bool-list">
					<li>Book Name</li>
				</ul>
			</div>
		);
	}
}

export default BookList;
