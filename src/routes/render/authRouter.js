import express from 'express';
// import redirectIfAuth from '../../middlewares/checkAuth';

const authRouter = express.Router();

authRouter.get('/login', (req, res) => res.render('LoginPage'));

authRouter.get('/signup', (req, res) => res.render('RegisterUserPage'));

export default authRouter;
