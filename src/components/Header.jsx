import "./Header.css";
import { Button } from "./iuButton/Button";
function Header() {
  return (
    <header className="container">
      <h2>Favorite Movies</h2>

      <Button className="btn-header">ADD MOVE </Button>
    </header>
  );
}
export default Header;
