import React from "react";
import "../../styles/Card.css";

function CardComponent(props) {
  return <div className={`card ${props.className}`}>{props.children}</div>;
}

export default CardComponent;
