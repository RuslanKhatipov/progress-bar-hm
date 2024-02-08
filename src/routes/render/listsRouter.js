import express from 'express';
import { List, User } from '../../../db/models';

const router = express.Router();

// const lists = [{ id: 1, title: 'Подготовить презентацию' },
//   { id: 2, title: 'Сделать покупки' },
//   { id: 3, title: 'Прочитать новую книгу' },
//   { id: 4, title: 'Посмотреть новый фильм' },
//   { id: 5, title: 'Заняться спортом' }];

router.get('/', async (req, res) => {
  const lists = await List.findAll();
  const initState = { lists };
  res.render('AllListsPage', initState);
  // res.render('AllListsPage', { lists });
});

router.get('/myList', async (req, res) => {
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
