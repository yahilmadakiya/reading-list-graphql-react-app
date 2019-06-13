import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
	displayBookDetails() {
		const { book } = this.props.data;

		if (book) {
			return (
				<div>
					<h2>{book.name}</h2>
					<p>
						<b>genre: </b>
						{book.genre}
					</p>
					<p>
						<b>Author: </b>
						{book.author.name}
					</p>
					<b>
						<i>All books by this author</i>
					</b>
					<ul className="other-books book-list">
						{book.author.books.map(item => {
							return <li key={item.id}>{item.name}</li>;
						})}
					</ul>
				</div>
			);
		} else {
			return <div>No book selected.</div>;
		}
	}
	render() {
		return <div id="book-details">{this.displayBookDetails()}</div>;
	}
}

export default graphql(getBookQuery, {
	options: props => {
		return {
			variables: {
				id: props.bookId
			}
		};
	}
})(BookDetails);
