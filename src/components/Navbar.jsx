import React from "react";
import { Link } from "@reach/router";
import {
  Nav,
  Navlink
} from "../components//styled-components/NavbarStyledComponents";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Navlink>Products</Navlink>
      </Link>
      <Link to="/basket">
        <Navlink>
          <span
            className="iconify"
            data-icon="fa:shopping-bag"
            data-inline="false"
          ></span>
        </Navlink>
      </Link>
    </Nav>
  );
};

export default Navbar;
