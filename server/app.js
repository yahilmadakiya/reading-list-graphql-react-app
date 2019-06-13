const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// allow cross-origin requests
app.use(cors());

// Connect with DataBase
// Make sure to replace my db string & creds with your own
mongoose.connect(
	"mongodb://yahil:yahil#525225@ds227332.mlab.com:27332/yahil_gql",
	{ useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
	console.log("Connected to DB");
});

// bind express with graphql
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
