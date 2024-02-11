import express from 'express';
import {
  Anket, Question, List, User, Answer,
} from '../../../db/models';

const router = express.Router();

router.get('/:url', async (req, res) => {
  try {
    const { url } = req.params;
    const anket = await Anket.findOne({ where: { url } });
    const questions = await Question.findAll({
      where: { posId: anket.posId },
    });
    const list = await List.findOne({ where: { anketId: anket.id } });
    const hruser = await User.findOne({ where: { id: list.userId } });
    const answers = await Answer.findAll({
      where: { anketId: anket.id },
    });
    res.render('AnketPage', {
      anket, questions, list, hruser, answers,
    });
    // console.log('===========>>>>>>>', anket);
    // console.log('===========>>>>>>>', questions);
    // console.log('===========>>>>>>>', list);
    // console.log('===========>>>>>>>', hruser);
  } catch (error) {
    console.error('Error fetching ankets and questions:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
