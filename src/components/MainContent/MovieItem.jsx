import "./MainContent.css";
import { movies } from "../../utils/constants";
import { Button } from "../iuButton/Button";

function MovieItem() {
  return (
    <main className="wrapper-item">
      {movies.map((item) => {
        return (
          <div className="container-block">
            <img className="image-avatar" src={item.img} alt="Avatar 1" />
            <section>
              <h3>{item.title}</h3>

              {/* <p>{item.id}</p> */}

              <div className="container-btn">
                <Button className="btn-stars">{item.rating}/5 stars</Button>
                <Button className={"btn-delete"}>DELETE</Button>
                <Button className="btn-edit">EDIT</Button>
              </div>
            </section>
          </div>
        );
      })}
    </main>
  );
}
export default MovieItem;
