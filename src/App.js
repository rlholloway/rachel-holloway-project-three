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
import Header from './components/Header.js'
import Randomize from './components/Randomize.js';
import UserSearch from './components/UserSearch';
import DisplayQuotes from './components/DisplayQuotes.js';

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
        author: searchTerm,
        genre: genreTerm,
        limit: 20
      }
    }).then((response) => {
      setQuote(response.data.data);
    })
  }, [searchTerm, genreTerm]);

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

  const handleClear = (event) => {
    setUserInput("");
    setGenreInput("");
    setSearchTerm("");
    setGenreTerm("");
  }

  return (
    <div>
      <Header />
      <Randomize
        randomQuotes={quote} />
      {
        searchTerm || genreTerm
          ? <DisplayQuotes
            searchTerm={searchTerm}
            genreTerm={genreTerm} />
          : null
      }
      <UserSearch
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        userInput={userInput}
        handleGenreSubmit={handleGenreSubmit}
        handleGenreInput={handleGenreInput}
        genreInput={genreInput} />

      <button className='clearForms' onClick={handleClear}>Clear my Search</button>

      <footer>Created at Juno College 2022</footer>
    </div>
  );
}

export default App;