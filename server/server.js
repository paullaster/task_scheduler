/**
 * import external libraries
 */
const express = require('express');


/**
 * Instantiate the app instance
 */
const app = express();

/**
 * App variables
 */
const PORT = 6000;

/**
 * App settings
 */
app.use(express.json());
app.use(express.urlencoded({extended:true}));
/**
 * Starting server
 */
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
});