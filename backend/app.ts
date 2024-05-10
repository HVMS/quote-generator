import express, { Request, Response } from 'express';
import cors from 'cors';

import { getQuoteByCategoryRouter } from './controller/getQuoteByCategory';

// Create an Express app
const app = express();

// Enable CORS
app.use(cors());


// Middleware to parse JSON in request body
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from social media quote generator');
});

// Mount the router at /quote
app.use('/quotes', getQuoteByCategoryRouter);

app.listen(3001, () => {
    console.log('Server started on port 3001');
});