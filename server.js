/**
 * import external libraries
 */
const express = require('express');
const cors = require("cors");
const path = require('path');

/**
 * Instantiate the app instance
 */
const app = express();

/**
 * Importing app modules
 */
 const config = require('./config/index');
 const db = require("./database/models/index");
 
/**
 * App variables
 */
const port = config.PORT;

/**
 * Defining App origin
 */
 let corsOptions ={
    origin: `http://localhost:${port}`
}
/**
 * App settings
 */
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'client/build')))

/**
 * Aplication routes
 */
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

/**
 * Defining roles
 */
const Role = db.role;
db.sequelize.sync({
    force: true,
})
.then( ()=>{
    console.log("Resync DB");
    initial();
});

/**
 * Function to create the roles
 * Creating a single row in databse
 */
function initial(){
    Role.create({
        id: 1,
        name: "user"
    });
    Role.create(
        {
            id: 2,
            name: "moderator",
    });
    Role.create({
        id:3,
        name:"admin"
    });
    
};

/**
 * Starting server
 */
app.listen(port, ()=>{
    console.log(`Server is running on PORT: ${port}`);
});