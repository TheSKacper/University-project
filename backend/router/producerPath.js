import express from 'express'
import { createProducer, deleteProducer, getAllProducer, getOneProducer, getSearchProducer } from '../controllers/producerControllers.js'
const route = express.Router()

route.get('/',getAllProducer)

route.get('/search/:searchTerm',getSearchProducer)

route.get('/:id',getOneProducer)

route.post('/',createProducer)

route.delete('/:id',deleteProducer)

export default route