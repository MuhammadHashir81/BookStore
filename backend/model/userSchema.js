import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name:{
    type:String,
    required:[true,"Name is required"],
    minLength:[3,"Name should be atleast three characters"]

 },
 email:{
    type:String,
    required:true,
    unique:true
 },
 password:{
   type:String,
   required:[true,"password is required"]
 },
 
});

const User = mongoose.model("user",userSchema)
export default User