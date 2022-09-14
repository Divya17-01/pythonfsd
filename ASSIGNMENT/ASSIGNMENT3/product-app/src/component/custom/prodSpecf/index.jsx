import React from "react";
import "./style.css";
import asus from "../../../assest/images/asus.jpg";
import asus1 from "../../../assest/images/asus1.jpg";
import { useSelector, useDispatch } from "react-redux";

export default function ProdSpecf(props) {
  const count = useSelector((store) => store.counter);
  return (
    <div className="ProdSpecf-Container">
      <img
        src={
          count.listOfAllObject.find((item) => item.id === count.productID)
            .prodimg
        }
        alt=""
        className="ProdSpecf-img"
      />
      <div className="ProdSpecf-Detail-Con">
        <span className="Prod-Name">
          {
            count.listOfAllObject.find((item) => item.id === count.productID)
              .prodname
          }
        </span>
        <span className="Prod-Detail">
          {
            count.listOfAllObject.find((item) => item.id === count.productID)
              .price
          }
        </span>
        <div className="prod-list">
          <span className="Prod-Detal-List">Windows 11 Home - ASUS</span>
          <span className="Prod-Detal-List">Windows 11 Home - ASUS</span>
          <span className="Prod-Detal-List">Windows 11 Home - ASUS</span>
          <span className="Prod-Detal-List">Windows 11 Home - ASUS</span>
          <span className="Prod-Detal-List">Windows 11 Home - ASUS</span>
          <span className="Prod-Detal-List">Windows 11 Home - ASUS</span>
        </div>
      </div>
    </div>
  );
}