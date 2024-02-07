import express from 'express';
import { List, User } from '../../../db/models';

const router = express.Router();

router.get('/allLists', async (req, res) => {
  // const user = await User.findByPk(req.session.userId, include:{List:where{userId:req}});
  const lists = await List.findAll();
  const initState = { lists };
  res.render('AllListsPage', initState);
});

export default router;
