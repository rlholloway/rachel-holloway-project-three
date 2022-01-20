// Create state variables for API data and user queries (author/genre selection)

// Create component to use user query to get data back from the API 

// Catch errors and display error message if unsuccessful

// Create buttons with handleClick that will call the displayQuote function 

// Create component for displayQuote function to display JSX on page (data from API)

// Create a button to reset the page/search for a new quote

// https://pprathameshmore.github.io/QuoteGarden/

// IMPORTS
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header.js';
// import Randomize from './Randomize.js';
import UserSearch from './UserSearch';

function App() {

  // MAKE STATEFUL VARIABLES
  const [quote, setQuote] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [genreInput, setGenreInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [genreTerm, setGenreTerm] = useState("");

  // Call the API
  useEffect(() => {
    axios({
      url: "https://quote-garden.herokuapp.com/api/v3/quotes/",
      method: "GET",
      dataResponse: "json",
      params: {
        author: userInput,
        genre: genreInput,
        limit: 10
      }
    }).then((response) => {
      console.log(response.data.data);
      setQuote(response.data.data);
    })
  }, [searchTerm, genreTerm]);

  const handleClick = (event) => {
    console.log("It works!");
    if (quote !== "") {
      const listOfQuotes = quote;
      const randomQuote = listOfQuotes[Math.floor(Math.random() * listOfQuotes.length)];
      return (
        console.log(randomQuote)
      )
    } else {
      console.log("Try Again");
    }
  }

  const handleInput = (event) => {
    setUserInput(event.target.value);
  }

  const handleGenreInput = (event) => {
    setGenreInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(userInput);
    if (userInput === "") {
      alert("Please enter a valid search");
    }
  }

  const handleGenreSubmit = (event) => {
    event.preventDefault();
    setGenreTerm(genreInput);
    if (genreInput === "") {
      alert("Please enter a valid search");
    }
  }

  return (
    <div>
      <Header />
      {/* <Randomize
      quote={quote} /> */}

      <button className='randomizeButton' onClick={handleClick}>Find a Random Quote</button>

      <div className='resultsSection wrapper'>
        {quote.map((singleQuote) => {
          return (
            <div key={singleQuote._id}>
              <p className='quoteText'>“{singleQuote.quoteText}”</p>
              <p className='authorText'>—{singleQuote.quoteAuthor}</p>
            </div>
          )
        })}
      </div>

        <UserSearch 
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        userInput={userInput}
        handleGenreSubmit={handleGenreSubmit}
        handleGenreInput={handleGenreInput}
        genreInput={genreInput}/>
      
      <footer>Created at Juno College 2022</footer>
    </div>
  );
}

export default App;
