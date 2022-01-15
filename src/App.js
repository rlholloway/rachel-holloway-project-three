// Create state variables for API data and user queries (author/genre selection)

// Create component to use user query to get data back from the API 

// Catch errors and display error message if unsuccessful

// Create buttons with handleClick that will call the displayQuote function 

// Create component for displayQuote function to display JSX on page (data from API)

// Create a button to reset the page/search for a new quote

// IMPORTS
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header.js';

function App() {

// MAKE STATEFUL VARIABLES
const [quote, setQuote] = useState([]);

  useEffect ( () => {
    axios({
      url: "https://quote-garden.herokuapp.com/api/v3/quotes/",
      method: "GET",
      dataResponse: "json",
      params: {
        author: "Bill Gates",
        genre: "success"
      }
    }).then( (response) => {
      console.log(response.data);
    })
  }, []);

  const handleClick = (event) => {
    console.log("You clicked it!");
  }

  return (
    <div className="App">
      <Header />

      <button onClick={handleClick}>Find a Random Quote</button>

      {quote.map( (individualQuote) => {
        return (
          <div>
            <p>{individualQuote.data[0].quoteText}</p>
          </div>
        )
      })}
      
    </div>
  );
}

export default App;
