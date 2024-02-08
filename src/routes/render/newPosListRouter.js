import express from 'express';
import {
  List, User, Position, Question, Anket, Answer,
} from '../../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const questions = await Question.findAll({ includes: Position });
  res.render('NewListForm', { questions });
});

export default router;
