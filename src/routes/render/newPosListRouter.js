import express from 'express';
import {
  List, User, Position, Question, Anket, Answer,
} from '../../../db/models';

const router = express.Router();

router.get('/:posId', async (req, res) => {
  try {
    const { posId } = req.params;
    const questions = await Question.findAll({
      include: [{
        model: Position,
        where: { id: posId },
      }],
    });
    res.render('NewListForm', { questions });
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
