import React from "react";
import { Evenodd } from "./Icons";

const ItemHead = ({ txt1, txt2 }: { txt1: string; txt2: string }) => {
  return (
    <span>
      {txt1}{" "}
      <span className="inline-block">
        {txt2} <Evenodd />
      </span>
    </span>
  );
};

export default ItemHead;
