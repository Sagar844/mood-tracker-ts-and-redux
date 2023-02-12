import { FC, useState } from "react";
import P from "./P";

export type podutsprop = {
  tittle: string;
  id: number;
};

const Produts = () => {
  const [Produts, setproduts] = useState<podutsprop[]>([
    { tittle: "i phone", id: 1 },
    { tittle: "mobile", id: 2 },
  ]);

  return (
    <div>
      {Produts.map((PR) => (
        <P produts={PR}></P>
      ))}
    </div>
  );
};

Produts.defaultProps = {};

export default Produts;
