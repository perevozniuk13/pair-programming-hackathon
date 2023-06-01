import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UserPage from "./pages/UserPage/UserPage";
import Header from "./components/Header/Header";

const App = () => {
  return <>
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/user" element={<UserPage />} />
  </Routes>
  </BrowserRouter>
  
  </>;
};

export default App;
