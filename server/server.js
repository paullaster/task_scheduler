/**
 * import external libraries
 */
const express = require('express');

/**
 * Instantiate the app instance
 */
const app = express();

/**
 * Importing app modules
 */
 const config = require('./config/index');
 const router = require("./routes/routes");
 
/**
 * App variables
 */
const port = config.PORT;

/**
 * App settings
 */
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/**
 * Calling middlewares
 */
app.use(router);



/**
 * Starting server
 */
app.listen(port, ()=>{
    console.log(`Server is running on PORT: ${port}`);
});