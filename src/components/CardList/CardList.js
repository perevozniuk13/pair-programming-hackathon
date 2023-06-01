import "./CardList.scss";
import Card from "../Card/Card";

export default function CardList({ cardsToDisplay, searchCategory }) {
  if (!cardsToDisplay) {
    return <p>LOADING...</p>
  }

  if (searchCategory === "films") {
    return (
      <section className="card-list">
        {cardsToDisplay.map(item => {          
          return (
            <article className={`card card-${searchCategory}`} key={item.id}>
              <img className="card__image" src={item.Poster} alt={item.Title} />
              <div className="card__text">
                <p className="card__detail">Year: {item.Year}</p>
                <p className="card__detail">Title: {item.Title}</p>
                <p className="card__category-label">{searchCategory.slice(0, -1).toUpperCase()}</p>
              </div>
            </article>
          );
        })}
      </section>
    );
  }

  if (searchCategory === "albums") {
    return <p className="albums-coming-soon">🚨 Albums functionality coming soon... 🚨</p>
  }

  if (searchCategory === "books") {
    console.log("cardsToDisplay: ", cardsToDisplay);
    return (
      <section className="card-list">
        {cardsToDisplay.map(item => {
          let cleanedTitle = item.title;
          if (item.title.includes(":")) {
            cleanedTitle = item.title.substring(0, item.title.indexOf(":"));
          }
          let thumbnailSource;
          if (!item.imageLinks || !item.imageLinks.thumbnail) {
            thumbnailSource = "https://picsum.photos/id/29/200/300";
          } else {
            thumbnailSource = item.imageLinks.thumbnail;
          }
          
          return (
            <article className={`card card-${searchCategory}`} key={item.id}>
              <img className="card__image" src={thumbnailSource} alt={cleanedTitle} />
              <div className="card__text">
                <p className="card__detail">Year: {item.publishedDate}</p>
                <p className="card__detail">Title: {cleanedTitle}</p>
                {item.authors.map((author, index) => <p className="card__detail" key={index}>Creator: {author}</p>)}
                <p className="card__category-label">{searchCategory.slice(0, -1).toUpperCase()}</p>
              </div>
            </article>
          );
        })}
      </section>
    );
  }
}