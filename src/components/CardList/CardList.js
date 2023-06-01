import "./CardList.scss";
import Card from "../Card/Card";

export default function CardList({ cardsToDisplay, searchCategory }) {
  return (
    <>
    <section className="card-list">
      {cardsToDisplay.map(item => {
        let cleanedTitle = item.title;

        if (item.title.includes(":")) {
          cleanedTitle = item.title.substring(0, item.title.indexOf(":"));
        }
        
        return (
          <article className={`card card-${searchCategory}`} key={item.id}>
            <p className="card__detail">Year: {item.publishedDate}</p>
            <p className="card__detail">Title: {cleanedTitle}</p>
            {item.authors.map((author, index) => <p className="card__detail" key={index}>Creator: {author}</p>)}
            <p className="card__detail">ID: {item.id}</p>
            <p className="card__category-label">{searchCategory.slice(0, -1).toUpperCase()}</p>
          </article>
        );
      })}
    </section>
    
    </>
  );
}