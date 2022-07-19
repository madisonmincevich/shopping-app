import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  return (
    <div>
      <div>
        <a href="#/user" className="userIcon me-5 ms-5">
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="#basket" className="cartIcon me-5 ms-5">
          <FontAwesomeIcon icon={faCartShopping} />{" "}
          {props.countCartItems ? <span>{props.countCartItems}</span> : " "}
        </a>
      </div>
    </div>
  );
}
