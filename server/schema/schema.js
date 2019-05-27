const graphql = require("graphql");
const _ = require("lodash");

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLList
} = graphql;

// dummy data
var books = [
	{ name: "Name of the Wind", genre: "Fantasy", id: "1", authorid: "1" },
	{ name: "The Final Empire", genre: "Fantasy", id: "2", authorid: "2" },
	{ name: "The Long Earth", genre: "Sci-Fi", id: "3", authorid: "3" },
	{ name: "The Hero of Ages", genre: "Fantasy", id: "4", authorid: "2" },
	{ name: "The Colour of Magic", genre: "Fantasy", id: "5", authorid: "3" },
	{ name: "The Light Fantastic", genre: "Fantasy", id: "6", authorid: "3" }
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
		genre: { type: GraphQLString },
		author: {
			type: AuthorType,
			resolve(parent, arg) {
				console.log(parent);
				return _.find(authors, { id: parent.authorid });
			}
		}
	})
});

const AuthorType = new GraphQLObjectType({
	name: "Author",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
		books: {
			type: new GraphQLList(BookType),
			resolve(parent, args) {
				return _.filter(books, { authorid: parent.id });
			}
		}
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
		},
		books: {
			type: new GraphQLList(BookType),
			resolve(parent, args) {
				return books;
			}
		},
		authors: {
			type: new GraphQLList(AuthorType),
			resolve(parent, ages) {
				return authors;
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
