import morgan from 'morgan';
import express, { Request, Response } from 'express';
import { router as figletRouter } from './routes/figlet.routes';
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

app.use('/api', figletRouter);
app.use((req: Request, res: Response): Response => res.status(404).json({ message: "404 not found" }));

app.listen(process.env.PORT, (): void => console.log(`[ OK ] Listening on ${process.env.PORT}`));
