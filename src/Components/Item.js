import "./Transaction.css";
import "./item.css";
import PropTypes from "prop-types";
import DataContext from "../Data/DataContext";
import { useContext } from "react";
const Item = (props) => {
  const { title, amount } = props;
  // const name = useContext(DataContext);

  const status = amount < 0 ? "expend" : "income";
  const symbol = amount < 0 ? "-" : "+";

  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <>
      <li className={status}>
        {title}
        <span>
          {symbol}
          {formatNumber(Math.abs(amount))}
        </span>
        {/* {name} */}
      </li>
    </>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
