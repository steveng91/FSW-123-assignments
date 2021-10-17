import React, {useState, useEffect} from "react";
import '../App.css'


const CartCard = (props) => {
  const [num, setNum] = useState(0);

  const handleAmountChange = (e) => {
    setNum(e.target.value);
  };

  useEffect(() => {
    setNum(props.num);
  }, [props.num]);

  const content = (
    <div className={"card"}>
      <h3>{props.item.name}</h3>
      <div>
        <p>{`$${props.item.base_experience * num}`}</p>
        <input
          type="number"
          min={"0"}
          max={"100"}
          value={num}
          onChange={handleAmountChange}
        />
      </div>
    </div>
  );

  return content;
};

export default CartCard;