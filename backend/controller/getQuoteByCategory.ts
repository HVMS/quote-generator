import express, { Request, Response } from 'express';
import QuoteService from '../service/quote.service';
import { get } from 'http';

export const getQuoteByCategoryRouter = express.Router();

const quoteService = new QuoteService();

getQuoteByCategoryRouter.get('/', async (req: Request, res: Response) => {

    console.log("Request is : ", req);
    console.log("Request body is : ", req.body);

    const category = req.query.category;
    console.log("Category is : ", category);

    try {
        const quote = await quoteService.getQuoteByCategory(category as string);
        if (quote.length > 0 && quote !== null) {
            console.log("Quote is : ", quote[0].quote);
            res.status(200).json({ message: "Successful quote retrieved", data: quote[0].quote });
        } else {
            res.status(404).json({ message: "Failed to retrieve quote", quote: null });
        }
    } catch (error) {
        console.log("something went wrong", error);
    }
}
);