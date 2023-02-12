import React from "react";
import { podutsprop } from "./Produts";

type a = {
  produts: podutsprop;
};

const P = ({ produts }: a) => {
  return <div>{produts.tittle}</div>;
};
export default P;
