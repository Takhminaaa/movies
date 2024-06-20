import "./App.css";
import Header from "./components/Header";
import MovieItem from "./components/MainContent/MovieItem";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <MovieItem />
    </div>
  );
}

export default App;
