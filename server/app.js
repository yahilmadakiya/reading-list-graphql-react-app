const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

// Connect with DataBase
mongoose.connect(
	"mongodb://yahil:yahil#525225@ds227332.mlab.com:27332/yahil_gql",
	{ useNewUrlParser: true }
);

// DataBase Connection
mongoose.connection.once("open", () => {
	console.log("Connected to DB");
});

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

app.listen(4000, () => {
	console.log("Now Listing for requests on port 4000");
});
