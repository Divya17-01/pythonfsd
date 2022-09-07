import React from 'react';
import { card,SearchBar } from '../../component';
import "./style.css";
import { useSelector } from "react-reux";
export default function mainscreen(props){
    const count = useSelector((store) => store.counter);

    return (
        <div>
            <SearchBar />
            <div className ='mainscreen-Card-Container'>
                {(count.search.length === 0
                    ? count.listOfObject
                    : count.listOfObject.filter((item) => item.title.includes(count.search))
                    ).map((item) => {
                        <Card productId={item.Id} />
                    })}
            </div>
        </div>
    );

}