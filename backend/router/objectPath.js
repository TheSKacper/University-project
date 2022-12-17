import express from 'express'
import { allObject, createObject, deleteObject, getObject, searchCategory, searchObject, updateObject } from '../controllers/objectController.js'

const route = express.Router()

route.get('/',allObject)

route.get('/:id',getObject)

route.post('/',createObject)

route.delete('/:id',deleteObject)

route.put('/:id',updateObject)

route.get('/search/:searchTerm',searchObject)

route.get('/tag/:tagName',searchCategory)





export default route