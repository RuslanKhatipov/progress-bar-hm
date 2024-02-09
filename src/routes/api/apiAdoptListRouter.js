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
    res.redirect('/');
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:questionId', async (req, res) => { // Заменяем questId на questionId
  try {
    const { questionId } = req.params; // Заменяем questId на questionId
    await Question.destroy({
      where: {
        id: questionId, // Исправляем questId на questionId
      },
    });
    res.sendStatus(200); // Возвращаем статус 200 для успешного удаления
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
