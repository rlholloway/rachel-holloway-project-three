import { useState, useEffect } from 'react'

const Randomize = (props) => {
    const [ randomQuote, setRandomQuote ] = useState([]);
    
    const handleClick = (e) => {
        
        if (props.randomQuotes !== "") {
            console.log("It works!");
            const listOfQuotes = props.randomQuotes;
            const selectedQuote = listOfQuotes[Math.floor(Math.random() * listOfQuotes.length)];
            console.log(selectedQuote);
            console.log(props.randomQuotes);
            setRandomQuote(selectedQuote)
        }
    }
    return (
        <div>
            {
                randomQuote === []
                    ? <button className="randomizeButton" onClick={(e) => { handleClick(e) }}>Find a Random Quote</button>
                    : (<section className="randomizeSection">
                        <button className="randomizeButton" onClick={(e) => { handleClick(e) }}>Find a Random Quote</button>
                        <div key={randomQuote._id}>
                            <p className='quoteText'>“{randomQuote.quoteText}”</p>
                            <p className='authorText'>{randomQuote.quoteAuthor}</p>
                        </div>
                    </section>)
            }
        </div>
    )
}
    
    export default Randomize;