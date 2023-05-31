import CardList from "../../components/CardList/CardList";
import Searchbar from "../../components/Searchbar/Searchbar";
import "./Homepage.scss";

export default function HomePage() {
  return <>
  <Searchbar />
  {/* pass cards array as a prop */}
  <CardList />
  </>
}