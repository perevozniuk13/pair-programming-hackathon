import "./Searchbar.scss";
import axios from "axios";
import {v4 as uuid} from "uuid";

export default function Searchbar({ setSearchResults, setSearchCategory }) {
  
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.searchQuery.value;
    const category = event.target.category.value;
    if (!query) {
      alert("Search query must not be empty!");
    } else {
      setSearchCategory(category);
      switch (category) {

        case "books": 
          axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
            .then(response => {
              const fullResults = response.data.items.map(item => item.volumeInfo);
              const cleanedResults = fullResults.map(item => {
                return {
                  title: item.title,
                  authors: item.authors,
                  publishedDate: item.publishedDate,
                  description: item.description,
                  imageLinks: item.imageLinks,
                  id: uuid()
                }
              });
              setSearchResults(cleanedResults);
            })
          break;

        case "films": 
          axios
            .get(`http://www.omdbapi.com/?s=${query}&apikey=c08a80f8`)
            .then(response => {
              const cleanedResponse = response.data.Search.map(item => { return { ...item, id: uuid() } });
              setSearchResults(cleanedResponse);
            })
          break;

        case "albums": 
          axios
          .get(``)
          .then(response => {
            const cleanedResponse = response;
            setSearchResults(cleanedResponse);
          })
          break;

      }
    }
  }

  return (
  <div className="searchbar">
      <form className="searchbar__form" onSubmit={handleSearch}>
        <input className="searchbar__input" name="searchQuery" type="text" placeholder="Search for a title or creator..."/>
        <select className="searchbar__dropdown" name="category">
          <option value="books">BOOKS</option>
          <option value="films">FILMS</option>
          <option value="albums">ALBUMS</option>
        </select>
        
        <button className="searchbar__button">Search</button>
      </form>
  </div>
  )
}