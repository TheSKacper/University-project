import placeModel from '../models/placeModel.js'

export const createPlace = async(req,res) =>
{
    const newItem = new placeModel({country:req.body.country,nameShop:req.body.nameShop,
    user_ID:req.body.user_ID, object_ID: req.body.object_ID
    })
    try {
        const createdItem = await newItem.save()
        res.status(200).json(createdItem)
        
    } catch (error) {
        console.log(error)
    }
}

export const getAllPlace = async(req,res) =>
{
    try {
        const find = await placeModel.find().populate('object_ID')
        res.status(200).json(find)
    } catch (error) {
        console.log(error)
    }
}

export const  deletePlace = async(req,res) => 
{
    try {
       await placeModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Deleted')
    } catch (error) {
        console.log(error)
    }
}

export const getOnePlace = async(req,res) =>
{
    try {
        const find = await placeModel.findById(req.params.id).populate('object_ID')
        res.status(200).json(find)
    } catch (error) {
        console.log(error)
    }
}