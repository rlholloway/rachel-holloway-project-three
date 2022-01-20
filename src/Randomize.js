
const Randomize = (props) => {
    const handleClick = (e) => {
        console.log("It works!");
        if (props.quote !== "") {
            const listOfQuotes = props.quote;
            const randomQuote = listOfQuotes[Math.floor(Math.random() * listOfQuotes.length)];
            return (
                <div>
                    {
                        randomQuote === undefined
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
    }
}
    
    export default Randomize;