import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
  name:{
    type:String,
 },
 price:{
    type:Number,
 },
 category:{
   type:String
 },
 image:{
   type:String
 },
 title:{
   type:String
 }
});

const Book = mongoose.model("book",bookSchema)
export default Book