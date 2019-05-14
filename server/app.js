const express = require("express");

const app = express();

app.listen(4000, () => {
	console.log("Now Listing for requests on port 4000");
});
