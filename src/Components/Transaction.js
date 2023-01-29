import React from "react";
import Item from "./Item";
import "./Transaction.css";
import DataContext from "../Data/DataContext";
import { useContext } from "react";
const Transaction = (props) => {
  // console.log(props.item[0])
  const { item } = props;
  // const name  = useContext(DataContext);
  return (
    <div>
      <ul className="item-list">
        {item.map((element) => {
          return <Item {...element} key={element.id} />;
        })}
      </ul>
      {/* {name} */}
    </div>
  );
};

export default Transaction;
