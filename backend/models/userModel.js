import mongoose, {Schema} from 'mongoose'
import objectModel from './objectModel.js';
import placeModel from './placeModel.js';


const userSchema = new Schema({
    email:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },

    place_ID:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:placeModel,
    },
 
    
})

export default mongoose.model('userModel',userSchema)