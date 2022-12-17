import mongoose, {Schema} from 'mongoose'
import categoryModel from './categoryModel.js'
import producerModel from './producerModel.js'


const objectSchema = new Schema ({
    name:
    {
        type:String,
        required:true
    },
    desc:
    {
        type:String,
        required:false
    },
    tags:
    {
        type:[String],
        required:true
    },

    price:
    {
        type:String,
        required:true
    },

    category_ID:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: categoryModel
    },

    producer_ID:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: producerModel
    },

})


export default mongoose.model('objectModel',objectSchema)