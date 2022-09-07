import  React,{useState} from "react";
import  {useSelector,useDispatch } from "react-redux";
import  { addCount, subCount } from "./redux/todoSlice";

export default function CountNum(props) {
    const count = useSelector((store) => store.counter);
    const dispatch = useDispatch();

    return (
        <span className="add-cont">
        <span className="button" onClick={() => setcount(count -1)}>
          -
        </span>
        <span className="button" onClick={() => setcount(count + 1)}>
          +
        </span>
        </span> 
    );
}    