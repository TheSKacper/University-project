import producerModel from '../models/producerModel.js'

export const createProducer = async(req,res) =>
{
    const newItem = new producerModel(req.body)
    try {
        const createdItem = await newItem.save()
        res.status(200).json(createdItem)
        
    } catch (error) {
        console.log(error)
    }
}

export const getAllProducer = async(req,res) =>
{
    try {
        const find = await producerModel.find()
        res.status(200).json(find)
    } catch (error) {
        console.log(error)
    }
}

export const  deleteProducer = async(req,res) => 
{
    try {
       await producerModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Deleted')
    } catch (error) {
        console.log(error)
    }
}

export const getSearchProducer = async(req,res) =>
{
    try {
        const search = new RegExp(req.params.searchTerm, 'i')
        const find = await producerModel.find({name: {$regex:search}})
        res.status(200).json(find) 
    } catch (error) {
        console.log(error)
    }
}

export const getOneProducer = async(req,res) =>
{
    try {
        const find = await producerModel.findById(req.params.id)
        res.status(200).json(find)
    } catch (error) {
        console.log(error)
    }
}