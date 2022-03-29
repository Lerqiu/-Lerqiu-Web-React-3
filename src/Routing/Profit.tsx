import React from "react";

import List from "./../Components/List/List";
import Bar from "./../Components/MainBar/Bar";
import { EntryType } from "../Components/Entry/RawEntry";

const Profit = () => {
  return (
    <>
      <Bar type={EntryType.PROFIT} />
      <List type={EntryType.PROFIT} />
    </>
  );
};

export default Profit;
