import objectModel from "../models/objectModel.js"


export const createObject = async(req,res) =>
{
    const newItem = objectModel({name:req.body.name,desc:req.body.desc,tags:req.body.tags,
    price:req.body.price,category_ID: req.body.category_ID,producer_ID: req.body.producer_ID
    })
    try {
        const createdItem = await newItem.save()
        res.status(200).json(createdItem)
    } catch (error) {
        console.log(error)
    }
}

export const deleteObject = async(req,res) =>
{
    try {
        await objectModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Deleted')
    } catch (error) {
        console.log(error)
    }
}

export const updateObject = async(req,res) =>
{
    try {
        const update = await objectModel.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
        res.status(200).json(update)
    } catch (error) {
        console.log(error)
    }
}

export const allObject = async(req,res) =>
{
    try {
        const find = await objectModel.find().populate('producer_ID').populate('category_ID')
        res.status(200).json(find)
    } catch (error) {
        console.log(error)
    }
}

export const getObject = async(req,res) =>
{
    try {
        const find = await objectModel.findById(req.params.id)
        res.status(200).json(find)
    } catch (error) {
        console.log(error)
    }
}

export const searchObject = async(req,res) =>
{
    try {
        const search = new RegExp(req.params.searchTerm, 'i')
        const find = await objectModel.find({name: {$regex:search}})
        res.status(200).json(find) 
    } catch (error) {
        console.log(error)
    }
}

export const searchCategory = async(req,res) =>
{
    try {
        const category = await objectModel.find({tags: req.params.tagName})
        res.status(200).json(category)
    } catch (error) {
        console.log(error)
    }
}


