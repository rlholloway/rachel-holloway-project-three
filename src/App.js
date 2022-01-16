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
const [userInput, setUserInput] = useState("");
const [genreInput, setGenreInput] = useState("");
const [searchTerm, setSearchTerm] = useState("");
const [genreTerm, setGenreTerm] = useState("");

// Call the API
  useEffect ( () => {
    axios({
      url: "https://quote-garden.herokuapp.com/api/v3/quotes/",
      method: "GET",
      dataResponse: "json",
      params: {
        author: userInput,
        genre: genreInput
      }
    }).then( (response) => {
      console.log(response.data.data);
      setQuote(response.data.data);
    })
  }, [searchTerm, genreTerm]);

  const handleClick = (event) => {
    console.log("You clicked it!");
  }

  const handleInput = (event) => {
    console.log("It works!", event.target.value);
    setUserInput(event.target.value);
  }

  const handleGenreInput = (event) => {
    console.log("How about this?", event.target.value);
    setGenreInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("This works too!");
    setSearchTerm(userInput);
  }

  const handleGenreSubmit = (event) => {
    event.preventDefault();
    console.log("Does this work?");
    setGenreTerm(genreInput);
  }

  return (
    <div className="App">
      <Header />

      <button onClick={handleClick}>Find a Random Quote</button>

      {quote.map( (singleQuote) => {
        return (
          <div key={singleQuote._id}>
            <p>{singleQuote.quoteText}</p>
            <p>{singleQuote.quoteAuthor}</p>
          </div>
        )
      })}

      <form onSubmit={ handleSubmit }>
        <label htmlFor="search">Search by Author</label>
        <input type="text" id="search" onChange={ handleInput } value={ userInput }/>
        <button>Search</button>
      </form>

      <form onSubmit={ handleGenreSubmit }>
        <label htmlFor="genreSearch">Search by Topic</label>
        <input type="text" id="genreSearch" onChange={ handleGenreInput } value={ genreInput } />
        <button>Search</button>
      </form>
      
    </div>
  );
}

export default App;
