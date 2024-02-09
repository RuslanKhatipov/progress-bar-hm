import express from 'express';
import {
  List, User, Anket, Question, Position,
} from '../../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const lists = await List.findAll({ include: [User, Anket] });
  res.render('AllListsPage', { lists });
});

// router.get('/', async (req, res) => {
//   console.log(res.locals);
//   try {
//     const myList = await User.findOne({
//       where: { id: res.locals.user.userId },
//       attributes: ['username'],
//       include: {
//         model: List,
//         attributes: [],
//       },
//     });
//     if (!myList) {
//       return res.status(404).send('My list not found');
//     }
//     res.render('AllListPage', { myList });
//   } catch (error) {
//     console.error('Error fetching my list:');
//     res.status(500).send('Internal Server Error');
//   }
// });

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const myList = await List.findAll({
    where: { id },
    include: [User, Anket],
  });
  res.render('AllListPage', { myList });
});

export default router;
