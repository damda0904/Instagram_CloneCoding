import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import postsRouter from './router/postsRouter.js'
import authRouter from './router/authRouter.js'
import searchRouter from './router/searchRouter.js';
import { config } from './config.js';
import { connectDB } from './db/database.js';

const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors())

app.use('/posts', postsRouter)
app.use('/auth', authRouter)
app.use('/search', searchRouter)

app.use((req, res, next) => {
    res.sendStatus(404);
})

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
})


connectDB().then(() => {
    console.log("connected!");
    const server = app.listen(config.host.port);
})