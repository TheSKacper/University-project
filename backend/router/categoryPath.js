import express from 'express'
import { createCategory, deleteCategory, getCategory, getOneCategory, searchCategory, updateCategory } from '../controllers/categoryControllers.js'

const route = express.Router()

route.post('/',createCategory)

route.get('/',getCategory)

route.put('/:id',updateCategory)

route.get('/:id',getOneCategory)

route.delete('/:id',deleteCategory)

route.get('/search/:searchTerm',searchCategory)


export default route