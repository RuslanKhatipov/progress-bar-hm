import express from 'express';
import { Answer } from '../../../db/models'; // Импортируйте модель Answer из вашего проекта

const router = express.Router();

// Эндпоинт для обновления поля answer в таблице Answer
router.post('/:anketId/questions/:questId', async (req, res) => {
  try {
    const { anketId, questId } = req.params;
    const { answer } = req.body;

    // Находим соответствующую запись в таблице Answer по анкетному и идентификатору вопроса
    const existingAnswer = await Answer.findOne({ where: { anketId, questId } });

    if (existingAnswer) {
      // Если запись уже существует, обновляем поле answer
      await existingAnswer.update({ answer });
      res.sendStatus(200);
    } else {
      // Если запись не найдена, создаем новую запись с данными
      await Answer.create({ anketId, questId, answer });
      res.sendStatus(201);
    }
  } catch (error) {
    console.error('Ошибка при обновлении ответа:', error);
    res.status(500).send(error);
  }
});

export default router;
