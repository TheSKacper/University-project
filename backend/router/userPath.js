import express from 'express'
import { createUser, userLogin,getAllUser } from '../controllers/userControllers.js'

const route = express.Router()

route.post('/',createUser)

route.post('/login',userLogin)

route.get('/', getAllUser)

export default route