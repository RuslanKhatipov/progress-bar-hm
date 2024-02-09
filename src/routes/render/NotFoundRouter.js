import express from 'express';
import path from 'path';

const router = express.Router();

router.get('*', (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, '../../../public/images/404page.jpg'));
});

export default router;
