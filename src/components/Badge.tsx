import React from "react";
import { BadgeLabelType, Color } from "./types";

interface Iprops {
  value: number;
  type: BadgeLabelType;
  color: Color;
}

export const Badge = ({ value, type, color }: Iprops) => {
  return (
    <span className={`col-2 m-3 badge bg-${color}`}>
      {type} : {value}
    </span>
  );
};
