import express from 'express';
import { List } from '../../../db/models';

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

export default apiListsRouter;
