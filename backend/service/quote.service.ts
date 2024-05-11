import envVariables from "../importenv";

class QuoteService {
    async getRandomQuote() {
        try {
            
            const response = await fetch(`https://api.quotable.io/random`,{
                headers: {
                    'Content-Type': 'application/json',
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
}

export default QuoteService;