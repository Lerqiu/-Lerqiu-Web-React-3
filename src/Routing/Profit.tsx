import React from "react";

import BuilderContextProvider from "./../Context/BuilderContext";
import List from "./../Components/List/List";
import Status from "./../Components/Status/Status";
import Bar from "./../Components/MainBar/Bar";
import { EntryType } from "../Components/Entry/RawEntry";

const Profit = () => {
  return (
    <>
      <BuilderContextProvider>
        <Bar type={EntryType.PROFIT} />
      </BuilderContextProvider>
      <List type={EntryType.PROFIT}/>
    </>
  );
};

export default Profit;
