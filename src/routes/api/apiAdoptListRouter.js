import express from 'express';
import {
  Answer, Question, Anket, List,
} from '../../../db/models';

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
    const newAnkket = await Anket.create({
      name, email, url, posId,
    });
    console.log(newAnkket.dataValues);
    const newList = await List.create({
      anketId: newAnkket.dataValues.id,
      userId: res.locals.user.id,
    });

    const anketId = newAnkket.dataValues.id; // Получаем anketId

    console.log(newList);
    res.status(201).json({ anketId });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/addanswers', async (req, res) => {
  try {
    const { anketId, answers } = req.body;

    // Создаем ответы для каждого вопроса
    await Promise.all(answers.map(async (ans) => {
      await Answer.create({
        anketId,
        questId: ans.questId,
        answer: ans.answer,
      });
    }));

    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:questionId', async (req, res) => {
  try {
    const { questionId } = req.params;
    await Question.destroy({
      where: {
        id: questionId,
      },
    });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
