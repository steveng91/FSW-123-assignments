import React, {useState} from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const ItemCard = (props) => {
  const [num, setNum] = useState(0);

  const handleAmountChange = (e) => {
    setNum(e.target.value);
  };
  const handleAdd = () => {
    if (num > 0) {
      props.handleCartAdd(props.item, num);
    }
    setNum(0);
  };

  const content = (
    <div className={"card"}>
      <img src={props.item.sprites.front_default} alt="pokemans" />
      <h3>{props.item.name}</h3>
      <div>
        <p>{`$${props.item.base_experience}`}</p>
        <input
          type="number"
          min={"0"}
          max={"100"}
          value={num}
          onChange={handleAmountChange}
        />
        <FontAwesomeIcon
          icon={faPlusCircle}
          onClick={handleAdd}
          className={"add-btn"}
        />
      </div>
    </div>
  );

  return content;
};

export default ItemCard;