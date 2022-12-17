import mongoose, {Schema} from "mongoose";
import objectModel from "./objectModel.js";


const placeSchema = new Schema({
    country:
    {
        type:String,
        required:true
    },

    nameShop:
    {
        type:String,
        required:true
    },

    object_ID:
    {
        type: [mongoose.Schema.Types.ObjectId],
        ref:objectModel,
    }

})


export default mongoose.model('placeModel',placeSchema)