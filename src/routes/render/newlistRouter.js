import express from 'express';
import {
  List, User, Position, Question, Anket, Answer,
} from '../../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const positions = await Position.findAll();
  res.render('ListForm', { positions });
});

export default router;
