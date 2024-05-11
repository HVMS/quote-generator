import express, { Request, Response } from 'express';
import QuoteService from '../service/quote.service';
import { get } from 'http';

export const getQuoteByCategoryRouter = express.Router();

const quoteService = new QuoteService();

getQuoteByCategoryRouter.get('/random', async (req: Request, res: Response) => {

    console.log(req.body);

    try {
        const quote = await quoteService.getRandomQuote();
        if (quote) {
            console.log(quote);
            res.status(200).json({ message: "Successful quote retrieved", data: quote });
        } else {
            res.status(404).json({ message: "Failed to retrieve quote", quote: null });
        }
    } catch (error) {
        console.log("something went wrong", error);
    }
}
);