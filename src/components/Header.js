import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  return (
    <div>
      <div>
        <a href="#/user" className="userIcon">
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="#/cart" className="cartIcon">
          <FontAwesomeIcon icon={faCartShopping} />{" "}
          {props.countCartItems ? <span>{props.countCartItems}</span> : " "}
        </a>
      </div>
    </div>
  );
}
