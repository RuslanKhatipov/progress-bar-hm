import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  // const initState = { hello: 'world' };
  res.render('IndexPage');
});

export default router;
