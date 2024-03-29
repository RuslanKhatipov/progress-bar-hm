import express from 'express';
import {
  User, Anket, Position,
} from '../../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.findAll();
  const positions = await Position.findAll();
  const ankets = await Anket.findAll({ include: Position });

  res.render('UsersPage', { users, ankets, positions });
});

export default router;
