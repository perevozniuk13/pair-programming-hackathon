import "./CardList.scss";
import Card from "../Card/Card";
import axios from "axios";
import { useState } from "react";

export default function CardList({ cardsToDisplay, searchCategory }) {
  const [requestSuccess, setRequestSuccess] = useState(false);

  const handleToConsume = (itemTitle, itemImage) => {
    let endpoint;
    if (searchCategory === "films") {
      endpoint = "movies";
    }
    if (searchCategory === "books") {
      endpoint = "books";
    }
    axios.post(`http://localhost:8099/${endpoint}/`, {
      title: itemTitle,
      poster: itemImage,
      status: "toconsume",
    }).then(setRequestSuccess({title: itemTitle, list: "toconsume"}));
  };

  const handleConsumed = (itemTitle, itemImage) => {
    let endpoint;
    if (searchCategory === "films") {
      endpoint = "movies";
    }
    if (searchCategory === "books") {
      endpoint = "books";
    }
    axios.post(`http://localhost:8099/${endpoint}/`, {
      title: itemTitle,
      poster: itemImage,
      status: "consumed",
    }).then(setRequestSuccess({title: itemTitle, list: "consumed"}));
  };

  console.log("TEST: ", cardsToDisplay);
  if (cardsToDisplay.length === 0 ||  !cardsToDisplay || typeof cardsToDisplay !== "object" || cardsToDisplay === undefined) {
    return <p></p>;
  }

  if (searchCategory === "films") {
    return (
      <section className="card-list">
        {cardsToDisplay.map((item) => {
          return (
            <article className={`card card-${searchCategory}`} key={item.id}>
              <img className="card__image" src={item.Poster} alt={item.Title} />
              <div className="card__text">
                <p className="card__detail">Year: {item.Year}</p>
                <p className="card__detail">Title: {item.Title}</p>
                <p className="card__category-label">
                  {searchCategory.slice(0, -1).toUpperCase()}
                </p>
                <div className="card__buttons">
                  <button
                    className={`card__to-consume-button ${searchCategory}-button`}
                    onClick={() => handleToConsume(item.Title, item.Poster)}
                    itemID={item.id}
                  >
                    ➪ To Consume
                  </button>
                  <button
                    className={`card__consumed-button ${searchCategory}-button`}
                    onClick={() => handleConsumed(item.Title, item.Poster)}
                    itemID={item.id}
                  >
                    ➪ Consumed
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    );
  }

  if (searchCategory === "albums") {
    return (
      <p className="albums-coming-soon">
        🚨 Albums functionality coming soon... 🚨
      </p>
    );
  }

  if (searchCategory === "books") {
    return (
      <section className="card-list">
        {cardsToDisplay.map((item) => {
          let cleanedTitle = item.title;
          // if (item.title.includes(":")) {
          //   cleanedTitle = item.title.substring(0, item.title.indexOf(":"));
          // }
          let thumbnailSource;
          if (!item.imageLinks || !item.imageLinks.thumbnail) {
            thumbnailSource = "https://picsum.photos/id/29/200/300";
          } else {
            thumbnailSource = item.imageLinks.thumbnail;
          }
          let authors;
          console.log(item.authors);
          if (!item.authors) {
            authors = "";
          } else {
            authors = item.authors[0];
          }
          // if (item.authors.length === 1) {
          //   authors = item.authors[0];
          // } else {
          //   authors = item.authors.join(", ");
          // }

          return (
            <article className={`card card-${searchCategory}`} key={item.id}>
              <img
                className="card__image"
                src={thumbnailSource}
                alt={cleanedTitle}
              />
              <div className="card__text">
                <p className="card__detail">Year: {item.publishedDate}</p>
                <p className="card__detail">Title: {cleanedTitle}</p>
                <p className="card__detail">Author: {authors}</p>
                <p className="card__category-label">
                  {searchCategory.slice(0, -1).toUpperCase()}
                </p>
                <div className="card__buttons">
                  <button
                    className="card__to-consume-button"
                    onClick={() => handleToConsume(cleanedTitle, thumbnailSource)}
                    itemID={item.id}
                  >
                    {requestSuccess.title === cleanedTitle && requestSuccess.list === "toconsume" ? <span className="request-symbol">✅</span> : <span className="request-symbol">➪</span>} To Consume
                  </button>
                  <button
                    className="card__consumed-button"
                    onClick={() => handleConsumed(cleanedTitle, thumbnailSource)}
                    itemID={item.id}
                  >
                    {requestSuccess.title === cleanedTitle && requestSuccess.list === "consumed" ? <span className="request-symbol">✅</span> : <span className="request-symbol">➪</span>} Consumed
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    );
  }
}
