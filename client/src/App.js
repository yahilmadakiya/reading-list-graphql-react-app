import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Components
import BookList from "./component/BookList";
import AddBook from "./component/AddBook";

// apollo client setup
const client = new ApolloClient({
	uri: "http://localhost:4000/graphql"
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="main">
				<h1>Ninja's Reading List</h1>
				<BookList />
				<AddBook />
			</div>
		</ApolloProvider>
	);
}

export default App;
