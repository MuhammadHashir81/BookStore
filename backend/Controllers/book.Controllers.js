import Book from "../model/bookSchema.js";

export const getBook = async (req,res)=>{
    try {
        const book = await Book.find()
        res.status(200).json(book)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }

}
export const addBooks = async (req,res)=>{
    const {name,price,category,image,title} = req.body;

    try {
        const book = await Book.create({name,price,category,image,title})
        res.status(200).json(book)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }

}