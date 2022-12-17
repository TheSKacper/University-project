import express from 'express'
import { createPlace, deletePlace, getAllPlace, getOnePlace } from '../controllers/placeControllers.js'

const route = express.Router()

route.post('/',createPlace)

route.get('/',getAllPlace)

route.get('/:id',getOnePlace)

route.delete('/:id',deletePlace)



export default route