import envVariables from "../importenv";

class QuoteService {
    async getQuoteByCategory(category: string) {
        try {
            
            const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`,{
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': envVariables.API_KEY,
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            
            if (!data){
                return null;
            }
            
            console.log("Quote Data is : ", data);        
            return data;

        } catch (error) {
            console.log("Here is the error : ", error);
        }
    }

    countWordsInQuote(quote: string) : number {
        return quote.split(" ").length;
    }
}

export default QuoteService;