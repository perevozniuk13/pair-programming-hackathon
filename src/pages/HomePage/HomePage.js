import CardList from "../../components/CardList/CardList";
import Searchbar from "../../components/Searchbar/Searchbar";
import { useState } from "react";
import "./Homepage.scss";

export default function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");

  if (!searchResults) {
    return (
      <Searchbar setSearchResults={setSearchResults}/>
    );
  }

  if (searchResults) {
    return (
      <>
      <Searchbar setSearchResults={setSearchResults} setSearchCategory={setSearchCategory}/>
      <CardList cardsToDisplay={searchResults} searchCategory={searchCategory}/>
      </>
      );
  }

  
}