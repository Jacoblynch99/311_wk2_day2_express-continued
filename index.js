const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const vehicleRouter = require("./routers/vehicles-rt")
const commentsRouter = require('./routers/comments-rt')
const contactsRouter = require('./routers/contacts-rt')
const productsRouter = require('./routers/products-rt')

const port = process.env.PORT || 4001;
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(vehicleRouter)
app.use(commentsRouter)
app.use(contactsRouter)
app.use(productsRouter)

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
