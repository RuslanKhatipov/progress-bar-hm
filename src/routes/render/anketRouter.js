import express from 'express';
import { Anket, Question } from '../../../db/models';

const router = express.Router();

router.get('/:url', async (req, res) => {
  try {
    const { url } = req.params;
    // Используйте findOne с объектом параметров запроса
    const anket = await Anket.findOne({ where: { url } });

    // Запрос к модели Question с использованием include для включения связанных моделей
    const questions = await Question.findAll({
      where: { anketId: anket.id }, // Предполагается, что у модели Question есть поле anketId, которое связывает ее с моделью Anket
      include: [{ model: Position }],
    });

    res.render('AnketPage', { anket, questions }); // Передача данных в шаблон
  } catch (error) {
    console.error('Error fetching ankets and questions:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
