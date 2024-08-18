import Book from "../model/bookSchema.js";
import User from "../model/userSchema.js";
import { body, validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
export const validateUser = [
    body('name').isLength({ min: 3 }).withMessage('firstName must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({ min: 5 }).withMessage('password must be atleast 5 characters')

];
const handleErrors = (err) => {
    console.log(err)
    let errors = { name: '', email: '', password: '' };

    // incorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'this email is not registered';
    }

    // incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'this password is incorrect';
    }

    // duplicate email error
    if (err.code === 11000) {
        errors.email = 'this email is already registered';
        return errors;
    }

    // validation errors
    if (err.message.includes('user validation failed')) {
        // console.log(err);
        Object.values(err.errors).forEach(({ properties }) => {
            // console.log(val);
            // console.log(properties);
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}
export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const errors = validationResult(req);
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map(error => ` ${error.msg}`);
            return res.status(400).json({ error: errorMessages });
        }
        const findingEmail = await User.findOne({ email });
        if (findingEmail) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }
        const user = await User.create({ name, email, password: hashedPassword })
        res.status(201).json({
            message: "Signup successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    }

    catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({ errors });
    }

}



export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" })
        }

        const findingPassword = await bcrypt.compare(password, user.password)
        if (!findingPassword) {
            return res.status(400).json({ error: "Invalid email or password" })
        }

        res.status(200).json({
            message: "Login successfully", user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            }
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }

}