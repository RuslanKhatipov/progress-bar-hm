import express from 'express';
import { List, User, Anket } from '../../../db/models';

const apiListsRouter = express.Router();

apiListsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await List.destroy({
    where: {
      id,
    },
  });
  res.sendStatus(200);
});

apiListsRouter.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { list } = req.body;
  try {
    await List.update({ list }, {
      where: { id },
    });
    res.sendStatus(201);
  } catch {
    res.sendStatus(400);
  }
});

apiListsRouter.get('/:id', async (req, res) => {
  const myList = await List.findAll({
    where: { userId: res.locals.user.id },
    include: [User, Anket],
  });
  res.json({ myList });
});

export default apiListsRouter;
