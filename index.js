const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const vehicleRouter = require("./routers/vehicles-rt")

const port = process.env.PORT || 4001;
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(vehicleRouter)




app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
