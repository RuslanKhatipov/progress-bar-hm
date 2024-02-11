import express from 'express';
import redirectIfAuth from '../../middlewares/checkAuth';
import isAdmin from '../../middlewares/isAdminAuth';

const authRouter = express.Router();

authRouter.get('/login', redirectIfAuth, (req, res) => res.render('LoginPage'));

authRouter.get('/signup', isAdmin, (req, res) => res.render('RegisterUserPage'));
authRouter.get('/refresh', isAdmin, (req, res) => res.render('RefreshPage'));

export default authRouter;
