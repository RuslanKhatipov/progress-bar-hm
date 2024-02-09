import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/render/indexRouter';
import listsRouter from './routes/render/listsRouter';
import apiListsRouter from './routes/api/apiListsRouter';
import resLocals from './middlewares/resLocals';
import usersRouter from './routes/render/usersRouter';
import newlistRouter from './routes/render/newlistRouter';
import apiAuthRouter from './routes/api/apiAuthRouter';
// import checkNoAuth from './middlewares/checkAuth';
import authRouter from './routes/render/authRouter';
import apiUsersRouter from './routes/api/apiUsersRouter';
import newlistRouterByPos from './routes/render/newPosListRouter';

const PORT = process.env.PORT || 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(resLocals);

app.use('/api/auth', apiAuthRouter);
app.use('/auth', authRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/users', apiUsersRouter);
app.use('/newlist', newlistRouter);
app.use('/newlistbypos', newlistRouterByPos);
app.use('/lists', listsRouter);
app.use('/api/lists', apiListsRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
