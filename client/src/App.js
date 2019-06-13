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
			<div id="main" className="main">
				<AddBook />
				<BookList />
			</div>
		</ApolloProvider>
	);
}

export default App;
