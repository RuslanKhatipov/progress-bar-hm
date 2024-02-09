import express from 'express';
import { Answer, Question, Anket } from '../../../db/models';

const router = express.Router();

router.patch('/:answId', async (req, res) => {
  try {
    const { answer } = req.body;
    await Answer.update({ answer }, { where: { answId: req.params.answId } });
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/addquestion', async (req, res) => {
  try {
    const { question, posId } = req.body;
    await Question.create({ question, posId });
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/addanket', async (req, res) => {
  try {
    const {
      name, email, url, posId,
    } = req.body;
    await Anket.create({
      name, email, url, posId,
    });
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
