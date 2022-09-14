import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { detailing } from "../../../redux/todoSlice";
export default function Card(props) {
  let navigate = useNavigate();
  const count = useSelector((store) => store.counter);
  const { ident } = props;
  const dispatch = useDispatch();
  return (
    <div
      className="Custom-Container"
      onClick={() => {
        navigate("/Productspecfication");
        dispatch(detailing(ident));
      }}
    >
      <span className="Custom-Name">
        {count.listOfAllObject.find((item) => item.id === ident).prodname}
      </span>
      <span className="Custom-Detail">
        {count.listOfAllObject.find((item) => item.id === ident).prod_detail1}
      </span>
      <img
        src={count.listOfAllObject.find((item) => item.id === ident).prodimg}
        alt=""
        className="Custom-img"
      />
    </div>
  );
}