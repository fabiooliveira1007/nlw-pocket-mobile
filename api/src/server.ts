import express from 'express';
import { routes } from './routes';
import cors from 'cors';
import { errorHandling } from './middlewares/error-handling';

const PORT = 3333;
const app = express();

app.use(
  cors({
    origin: 'http://localhost:8081', // Allow requests from this origin
  })
);

app.use(express.json());
app.use(routes);

app.use(errorHandling);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
