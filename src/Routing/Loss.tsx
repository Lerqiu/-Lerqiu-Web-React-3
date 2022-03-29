import React from "react";

import List from "./../Components/List/List";
import Bar from "./../Components/MainBar/Bar";
import { EntryType } from "../Components/Entry/RawEntry";

const Loss = () => {
  return (
    <>
      <Bar type={EntryType.LOSS} />
      <List type={EntryType.LOSS} />
    </>
  );
};

export default Loss;
