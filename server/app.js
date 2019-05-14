const express = require("express");
const graphqlHTTP = require("express-graphql");
consr schema = require('./schema/schema');

const app = express();

app.use("/graphql", graphqlHTTP({
	schema
}));

app.listen(4000, () => {
	console.log("Now Listing for requests on port 4000");
});
