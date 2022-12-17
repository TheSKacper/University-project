import categoryModel from "../models/categoryModel.js"

export const createCategory = async(req,res) =>
{
    const newItem = categoryModel(req.body)
    try {
       const createdItem = await newItem.save()
       res.status(200).json(createdItem)
    } catch (error) {
        console.log(error)
    }
}

export const getCategory = async(req,res) =>
{
    try {
        const find = await categoryModel.find()
        res.status(200).json(find)
    } catch (error) {
        console.log(error)
    }
}

export const updateCategory = async(req,res) =>
{
    try {
        const update = await categoryModel.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
        res.status(200).json(update)
    } catch (error) {
        console.log(error)
    }
}

export const deleteCategory = async(req,res) =>
{
    try {
        await categoryModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Deleted')
    } catch (error) {
        console.log(error)
    }
}

export const getOneCategory = async(req,res) =>
{
    try {
        const find = await categoryModel.findById(req.params.id)
        res.status(200).json(find)
    } catch (error) {
        console.log(error)
    }
}


export const searchCategory = async(req,res) =>
{
    try {
        const search = new RegExp(req.params.searchTerm, 'i')
        const find = await categoryModel.find({name: {$regex:search}})
        res.status(200).json(find) 
    } catch (error) {
        console.log(error)
    }
}