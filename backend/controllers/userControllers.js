import userModel from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const createUser = async(req,res) =>
{
    try {
        const {email,password,place_ID} = ({email:req.body.email,password:req.body.password,place_ID:req.body.place_ID})
        const user = await userModel.findOne({email})
        if(user)
        {
            res.status(404).json('User is already existed')
            return
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser = {
                id:'',
                email: email.toLowerCase(),
                password: encryptedPassword,
                place_ID: place_ID
            }

        const dbUser = await userModel.create(newUser);
        res.send(generateTokenResponse(dbUser));
        
    } catch (error) {
        console.log(error)
    }
}

export const userLogin = async(req,res) =>
{
    try {
        const {email,password} = req.body
        const user = await userModel.findOne({email}).populate('place_ID')

        if(user && (await bcrypt.compare(password,user.password)))
        {
            res.send(generateTokenResponse(user))
        }
        else
        {
            res.status(200).json("Email or password invalid !")
        }
    } catch (error) {
        console.log(error)
    }
}

export const getAllUser = async(req,res) =>
{
    try {
        const find = await userModel.find().populate('place_ID')
        res.status(200).json(find)
    } catch (error) {
        console.log(error)
    }
}


const generateTokenResponse = (user) => {
    const token = jwt.sign({
        email:user.email
    },"SomeRandomText",{
      expiresIn:"30d"
    });
  
    user.token = token;
    return user;
  }