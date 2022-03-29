import TextField from "@material-ui/core/TextField";
import React, { useContext, useState } from "react";
import { BuilderContext } from "../../../Context/BuilderContext";

const InputDescription = () => {
  const { data, addDescription } = useContext(BuilderContext);

  const changeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDescription = e.target.value;
    addDescription(newDescription);
  };

  return <TextField label="Description" variant="outlined" fullWidth={true}/>;
};

export default InputDescription;
