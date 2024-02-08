import express from 'express';
import { List, User, Anket } from '../../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const lists = await List.findAll({ include: [User, Anket] });
  res.render('AllListsPage', { lists });
});

router.get('/myList', async (req, res) => {
  console.log(res.locals);
  try {
    const myList = await User.findOne({
      where: { id: res.locals.user.userId },
      attributes: ['username'],
      include: {
        model: List,
        attributes: [],
      },
    });
    if (!myList) {
      return res.status(404).send('My list not found');
    }
    res.render('MyListPage', { myList });
  } catch (error) {
    console.error('Error fetching my list:');
    res.status(500).send('Internal Server Error');
  }
});

// const myList = await User.findByPk(req.session.userId,
//   include: List,
//   where: { userId: req.session.userId }
// });
// res.render('MyListPage',{ myList });

// const user = await User.findByPk(req.session.userId, include:{List:where{userId:req}});

export default router;
