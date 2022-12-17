import mongoose, {Schema} from 'mongoose'
import objectModel from './objectModel.js'


const categorySchema = new Schema
({
    name:
    {
        type:String,
        required:true
    },

})


export default mongoose.model('categoryModel',categorySchema)