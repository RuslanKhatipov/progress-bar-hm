import { Router } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../../db/models';
import generateTokens from '../../utils/generateTokens';
import cookieConfig from '../../config/cookiesConfig';

const router = Router();

router.post('/signup', async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).json({
      message: 'Please provide email, name and password',
    });
  }
  const hashPass = await bcrypt.hash(password, 10);
  const [newUser, created] = await User.findOrCreate({
    where: { email },
    defaults: { name, hashpass: hashPass },
  });
  if (!created) {
    return res.status(400).json({
      message: 'User already exists',
    });
  }
  const user = {
    id: newUser.id, name: newUser.name, email: newUser.email,
  };
  const { accessToken, refreshToken } = generateTokens({ user });
  res
    .cookie('accessToken', accessToken, cookieConfig.access)
    .cookie('refreshToken', refreshToken, cookieConfig.refresh)
    .sendStatus(200);
});

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   if (!(email && password)) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   const user = await User.findOne({ where: { email } });

//   if (!user) return res.status(403).json({ message: 'No user found' });

//   const correctPass = await bcrypt.compare(password, user.password);

//   if (!correctPass) {
//     return res.status(401).json({ message: 'Incorrect password' });
//   }

//   const plainUser = user.get();
//   delete plainUser.password;

//   const { access, refresh } = generateTokens({ user: plainUser });

//   res
//     .cookie('accessToken', access, cookieConfig.access)
//     .cookie('refreshToken', refresh, cookieConfig.refresh)
//     .sendStatus(200);
// });

// router.get('/logout', (req, res) => {
//   res.clearCookie('accessToken').clearCookie('refreshToken').sendStatus(200);
// });

export default router;
