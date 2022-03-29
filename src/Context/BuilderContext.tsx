import React, { useContext, useState } from "react";
import {
  defaultRawEntry,
  EntryType,
  IRawEntry,
} from "../Components/Entry/RawEntry";
import { BudgetContext } from "./BudgetContext";

interface IBuilderContext {
  data: IRawEntry;
  addDescription: (a: string) => void;
  addPrice: (a: string) => void;
  addType: (a: EntryType) => void;
  commit: () => void;
}

export const BuilderContext = React.createContext<IBuilderContext>(
  {} as IBuilderContext
);

interface IContextProps {
  children: React.ReactNode;
}

const BuilderContextProvider = ({ children }: IContextProps) => {
  const [builderData, setBuilderData] = useState<IRawEntry>(defaultRawEntry());

  const { add } = useContext(BudgetContext);

  const addDescription = (description: string) => {
    setBuilderData((prevBuilderData) => {
      const copy = { ...prevBuilderData };
      copy.description = description;
      return copy;
    });
  };

  const addPrice = (value: string) => {
    setBuilderData((prevBuilderData) => {
      const copy = { ...prevBuilderData };
      copy.value = value;
      return copy;
    });
  };

  const addType = (type: EntryType) => {
    if (type !== builderData.type)
      setBuilderData((prevBuilderData) => {
        const copy = { ...prevBuilderData };
        copy.type = type;
        return copy;
      });
  };

  const commit = () => {
    if (/^[0-9]+\.*[0-9]{0,2}$/.test(builderData.value)) {
      add(builderData);
      setBuilderData((_) => {
        return defaultRawEntry();
      });
    }
  };

  return (
    <BuilderContext.Provider
      value={{
        data: builderData,
        addDescription,
        addPrice,
        addType,
        commit,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};

export default BuilderContextProvider;
