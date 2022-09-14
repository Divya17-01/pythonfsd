import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
  let navigate = useNavigate();
  const { title = "Asus Store" } = props;

  return (
    <div className="NavBar-container">
      <p className="NavBar-title" onClick={() => navigate("/")}>
        {title}
      </p>

      <p className="Mob-icon" onClick={() => navigate("/products")}>
        Products
      </p>
      <p className="Mob-icon" onClick={() => navigate("/about")}>
        About
      </p>
      <p className="Mob-icon" onClick={() => navigate("/contactus")}>
        ContactUS
      </p>
    </div>
  );
}
