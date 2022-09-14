import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import asus from "../../../assest/images/asus1.jpg"
export default function ContactUs(props) {
  
    return (
        <div className="US-CON">
            <span className="US-CON1">Contact Us</span>
        <div className="Us-Container">
          <img src={asus} alt="" className="Us-img" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="Us-field1"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Email"
            className="Us-field2"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Message"
            className="Us-field3"
          />
          <button className="Us-field4">Contact us</button>
        </div>
      </div>
    );
}