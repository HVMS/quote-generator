import express, { Request, Response } from 'express';
import cors from 'cors';

// Create an Express app
const app = express();

// Enable CORS
app.use(cors());


// Middleware to parse JSON in request body
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Hello from express typescript');
});

app.use('/quotes', require('./routes/quotes'));

app.listen(3000, () => {
    console.log('Server started on port 3000');
});