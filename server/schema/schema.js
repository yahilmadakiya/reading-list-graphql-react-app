const graphql = require("graphql");
const _ = require("lodash");

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt
} = graphql;

// dummy data
var books = [
	{ name: "Name of the Wind", genre: "Fantasy", id: "1" },
	{ name: "The Final Empire", genre: "Fantasy", id: "2" },
	{ name: "The Long Earth", genre: "Sci-Fi", id: "3" }
];

var authors = [
	{ name: "patrick Rothfuss", age: "44", id: "1" },
	{ name: "Brandon Sanderson", age: "42", id: "2" },
	{ name: "Terry Pratchett", age: "66", id: "3" }
];

const BookType = new GraphQLObjectType({
	name: "Book",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString }
	})
});

const AuthorType = new GraphQLObjectType({
	name: "Author",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt }
	})
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLID } },
			resolve(parent, arg) {
				// Code to get data from db / other source
				return _.find(books, { id: arg.id });
			}
		},
		author: {
			type: AuthorType,
			args: { id: { type: GraphQLID } },
			resolve(parent, arg) {
				return _.find(authors, { id: arg.id });
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
