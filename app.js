const express = require('express');
const app = express();
const morgan = require('morgan');

//DB Connection
require('./database/connection');

// // Retrieve Routes
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');




app.use(morgan('dev'));
app.use(express.json());



app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Origin,X-Requested-With, Content-Type,Accept,Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, PATCH, POST, GET,DELETE');
        return res.status(200).send({});
    }
    next();
})

//Base Route
app.get('/', (req,res,next) =>{
    res.status(200).json({
        message: "Welcome to the Restful API!"
    });
});

// Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);






// Handling errors

// If no routes are matched
app.use((req, res, next)=>{
    const error = new Error("Oops! Endpoint doesn't found.");
    error.status = 404;
    next(error);
});

//If any error occured in the app
app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});


module.exports = app;