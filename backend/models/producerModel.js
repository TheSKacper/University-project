import mongoose, {Schema} from "mongoose";

const producerSchema = new Schema({
    name:
    {
        type:String,
        required:true
    },
})


export default mongoose.model('producerModel',producerSchema)