import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Transaction = ({ trans }) => {
  const sign = trans.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={trans.amount < 0 ? "minus" : "plus"}>
      {trans.text}{" "}
      <span>
        {sign}${numberWithCommas(Math.abs(trans.amount))}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(trans._id)} // we used underscore since mongodb use _id
      >
        x
      </button>
    </li>
  );
};
