import express from 'express';
import { Anket } from '../../../db/models';

const apiUsersRouter = express.Router();

apiUsersRouter.patch('/:posId', async (req, res) => {
  try {
    const { posId, anketId } = req.body;
    await Anket.update({ posId }, { where: { id: anketId } });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default apiUsersRouter;
