import express from 'express';
import { List, User, Anket } from '../../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const lists = await List.findAll({ include: [User, Anket] });
  res.render('AllListsPage', { lists });
});

export default router;
