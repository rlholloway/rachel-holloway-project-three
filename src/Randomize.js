import { useState } from 'react'

const Randomize = (props) => {
    const [ randomQuote, setRandomQuote ] = useState([]);
    
    const handleClick = (e) => {
        
        if (props.randomQuotes !== "") {
            const listOfQuotes = props.randomQuotes;
            const selectedQuote = listOfQuotes[Math.floor(Math.random() * listOfQuotes.length)];
            setRandomQuote(selectedQuote)
        }
    }
    return (
        <div className='wrapper'>
            {
                randomQuote === []
                    ? <button className="randomizeButton" onClick={(e) => { handleClick(e) }}>Find a Random Quote</button>
                    : (<section>
                        <button className="randomizeButton" onClick={(e) => { handleClick(e) }}>Find a Random Quote</button>
                        <div key={randomQuote._id}>
                            <p className='quoteText'>“{randomQuote.quoteText}”</p>
                            <p className='authorText'>—{randomQuote.quoteAuthor}</p>
                        </div>
                    </section>)
            }
        </div>
    )
}
    
    export default Randomize;