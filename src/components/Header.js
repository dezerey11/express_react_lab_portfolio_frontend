import { Link } from "react-router-dom";
import { Button } from "react-bulma-components";

function Header(props) {
//inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <h1>Dezerey's Portfolio Page</h1>
      <nav style={navStyle}>
        {/* Links using bulma-react-components */}
        <Button to="/" renderAs={Link}>
          Home
        </Button>
        <Button to="/about" renderAs={Link}>
          About
        </Button>
        <Button to="/projects" renderAs={Link}>
          Projects
        </Button>
      </nav>
    </header>
  );
}

export default Header;