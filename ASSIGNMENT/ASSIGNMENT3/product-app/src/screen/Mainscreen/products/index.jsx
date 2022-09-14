import React from "react";
import "./style.css";

import { useSelector } from "react-redux";
import { card } from "../../../component";
export default function AllProducts(props) { 
    const count = useSelector((store) => store.counter);
    return (
      <div className="AllProducts-Container">
        {count.listOfAllObject.map((item) => {
          return <card ident={item.id}  />;
        })}
      </div>
    );
}