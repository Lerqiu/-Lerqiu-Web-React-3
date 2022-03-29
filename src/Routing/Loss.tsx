import React from "react";

import BuilderContextProvider from "./../Context/BuilderContext";
import List from "./../Components/List/List";
import Status from "./../Components/Status/Status";
import Bar from "./../Components/MainBar/Bar";
import { EntryType } from "../Components/Entry/RawEntry";

const Loss = () => {
  return (
    <>
      <BuilderContextProvider>
        <Bar type={EntryType.LOSS} />
      </BuilderContextProvider>
      <List type={EntryType.LOSS} />
    </>
  );
};

export default Loss;
