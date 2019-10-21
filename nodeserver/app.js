const express =require('express')
const app =express();
const morgan = require('morgan')
const cors =require('cors')
const bodyParser = require('body-parser')


const devUiRoutes = require('./api/routes/receiveDevUi');
const detailsRoutes = require('./api/routes/devDetails');
const userRoutes = require('./api/routes/user');
const chartRoutes = require('./api/routes/chartDetails');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors());

app.use('/receiveDevUi', devUiRoutes)
app.use('/devDetails', detailsRoutes)
app.use('/user', userRoutes)
app.use('/chartDetails',chartRoutes)



app.use((req,res,next)=>{
    const error = new Error('NOt Found');
    error.status=404;
    next(error);    
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
    next(error)
    
})

module.exports = app
