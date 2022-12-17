import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import objectPath from './router/objectPath.js'
import categoryPath from './router/categoryPath.js'
import userPath from './router/userPath.js'
import producerPath from './router/producerPath.js'
import placePath from './router/placePath.js'

dotenv.config()
mongoose.set('strictQuery', true)

const app = express()
app.use(express.json())

app.use(cors({
    credentials:true,
    origin:['http://localhost:4200']
}))

const connect = async() =>
{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('Connected to MDB')
    } catch (error) {
        console.log(error)
    }
}



app.use('/api/category',categoryPath)
app.use('/api/user',userPath)
app.use('/api/object',objectPath)
app.use('/api/place',placePath)
app.use('/api/producer',producerPath)


app.listen(5000,() =>
{
    connect()
    console.log('Server work !')
})
