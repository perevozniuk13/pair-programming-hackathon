import ScrollList from "../../components/ScrollList/ScrollList";
import "./UserPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserPage() {
  const [category, setCategory] = useState("movies");
  const [libraryArray, setLibraryArray] = useState("");

  const getData =() => {
    axios
      .get(`http://localhost:8099/${category}`)
      .then((res) => {
        setLibraryArray(res.data);
        console.log(res);
        console.log(category);
      })
      .catch((error) => console.log(error));

  }


  useEffect(() => {
    getData();
  }, [category]);

   const handleDelete = (id) => {
    axios.delete(`http://localhost:8099/${category}/${id}`)
    .then((res) => {
        getData();
    })

  }

  if (!libraryArray) {
    return <p>Loading...</p>;
  }

  return (
    <section className="user-library">
      <div className="user-library__head-container">
        <h1 className="user-library__title">My Library</h1>

        <div className="user-library__buttons">
          <button
            onClick={() => setCategory("movies")}
            className="user-library__button"
          >
            Movies
          </button>
          <button
            onClick={() => setCategory("books")}
            className="user-library__button"
          >
            Books
          </button>
        </div>
      </div>
      {/* <h2 className="user-library__username">john_doe345</h2> */}

    
        <section className="user-library__main">
          <h3 className="user-library__subtitle">To consume:</h3>
          <ScrollList dataArray={libraryArray} handleDelete={handleDelete} status={"toconsume"} />
          <h3 className="user-library__subtitle">Consumed:</h3>
          <ScrollList dataArray={libraryArray} handleDelete={handleDelete}  status={"consumed"} />
        </section>
    </section>
  );
}
