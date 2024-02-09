import { Router } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../../db/models';
import generateTokens from '../../utils/generateTokens';
import cookieConfig from '../../config/cookiesConfig';
import isAdmin from '../../middlewares/isAdminAuth';

const router = Router();

router.post('/signup', isAdmin, async (req, res) => {
  const {
    username, email, password,
  } = req.body;
  if (!(username && email && password)) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      username, password: await bcrypt.hash(password, 10),
    },
  });
  if (!created) return res.status(403).json({ message: 'User already exists' });

  const plainUser = user.get();
  delete plainUser.password;

  res.sendStatus(200);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(403).json({ message: 'No user found' });
  const correctPass = await bcrypt.compare(password, user.password);
  if (!correctPass) {
    return res.status(401).json({ message: 'Incorrect password' });
  }
  const plainUser = user.get();
  delete plainUser.password;
  const { access, refresh } = generateTokens({ user: plainUser });
  console.log(refresh, plainUser);
  res
    .cookie('accessToken', access, cookieConfig.access)
    .cookie('refreshToken', refresh, cookieConfig.refresh)
    .sendStatus(200);
});

router.get('/logout', (req, res) => {
  res.clearCookie('accessToken').clearCookie('refreshToken').sendStatus(200).redirect('/');
});

router.patch('/refresh', isAdmin, async (req, res) => {
  const { email, newPassword } = req.body;
  if (!(email && newPassword)) {
    return res.status(400).json({ message: 'Email and new password are required' });
  }

  try {
    // Находим пользователя по его email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Хешируем новый пароль
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Обновляем пароль пользователя в базе данных
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
