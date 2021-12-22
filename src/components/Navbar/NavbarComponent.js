import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  IconButton,
  Badge,
} from "@mui/material";

import "./style.css";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Resto App</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
            <form className="d-flex basket-wrapper">
              <IconButton
                component={Link}
                to="/stepper"
                aria-label="Show basket contents"
                color="inherit"
              >
                <Badge color="secondary">
                  <FontAwesomeIcon icon={faShoppingCart} className="custom-basket" />
                </Badge>
              </IconButton>
            </form>
          </div>
        </div>
      </nav>
      <br />
    </div>
  );
};

export default NavBar;
