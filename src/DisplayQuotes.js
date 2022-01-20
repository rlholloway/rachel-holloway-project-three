import { useEffect, useState } from "react";
import axios from "axios";

const DisplayQuotes = (props) => {
    const [ quote, setQuote ] = useState([]);
    useEffect(() => {
        axios({
            url: "https://quote-garden.herokuapp.com/api/v3/quotes/",
            method: "GET",
            dataResponse: "json",
            params: {
                author: props.searchTerm,
                genre: props.genreTerm,
                limit: 10
            }
        }).then((response) => {
            console.log(response.data.data);
            setQuote(response.data.data);
        })
    }, [props.searchTerm, props.genreTerm]);
    return (
        <div>
            <h1>Display Quotes</h1>
            {
                quote.map((singleQuote) => {
                    return (
                        <div key={singleQuote._id}>
                            <p className='quoteText'>“{singleQuote.quoteText}”</p>
                            <p className='authorText'>—{singleQuote.quoteAuthor}</p>
                        </div>
                    )

            })}
        </div>
    )
}

export default DisplayQuotes;