import TextField from "@material-ui/core/TextField/TextField";
import { privateDecrypt } from "crypto";
import React, { useContext } from "react";
import { BuilderContext } from "../../../Context/BuilderContext";

const InputNumber = () => {
  const { addPrice, data } = useContext(BuilderContext);

  const changeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    addPrice(e.target.value);
  };

  return (
    <TextField
      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      value={data.value}
      onChange={changeDescription}
    />
  );
};

export default InputNumber;
