import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import asus from "../../../assest/images/asus1.jpg";
import callIcon from "../../../assest/images/callIcon.svg";
import messageIcon from "../../../assest/images/messageIcon.svg";
import whatsappIcon from "../../../assest/images/whatsappICon.svg";
import { useNavigate } from "react-router-dom";
export default function CallToAction(props) {
  let navigate = useNavigate();
    return (
      <div className="Call-to-action">
        <span className="Call-det1">Thankyou for checking us out</span>
        <span className="Call-det2">Drop us a Line sometimes</span>
        <img
          src={callIcon}
          alt=""
          className="Call-det3"
          onClick={() => navigate("/contactus")}
        />
        <img
          src={messageIcon}
          alt=""
          className="Call-det4"
          onClick={() => navigate("/contactus")}
        />
        <img
          src={whatsappIcon}
          alt=""
          className="Call-det5"
          onClick={() => navigate("/contactus")}
        />
      </div>
    );
}