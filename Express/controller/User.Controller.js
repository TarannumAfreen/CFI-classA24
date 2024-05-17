import express from 'express';
import bcrypt from 'bcrypt';
import UsersModel from '../model/User.model.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    git
    try {
        console.log(req.body);
        let findUser = await UsersModel.findOne({ email: req.body.email });
        if (findUser) {
            return res.status(409).json({ message: 'User already registered. Please login.' });
        }
        req.body.password = await bcrypt.hash(req.body.password, 11);
        let userData = new UsersModel(req.body);
        await userData.save();
        res.status(200).json({ message: 'User registered successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server error.' });
    }
});

export default router;