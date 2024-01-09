const connectDB=require('./database/connection')
const express =require('express')
const app = express();
const tasks = require('./routes/tasks')                     
const notfound=require('./middleware/not-found')
require('dotenv').config()

app.use(express.json())


app.use(express.static('./public'))

//routes
app.use('/api/v1/tasks',tasks)
app.use(notfound)
const port = process.env.PORT  || 3000
const start = async()=>{
try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port,console.log(`server listening on port ${port}...`))
} catch (error) {
    console.log(error);
}
}

start()