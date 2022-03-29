import MSelect, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import React, { useContext, useState } from "react";
import { BuilderContext } from "../../../Context/BuilderContext";
import { EntryType } from "../../Entry/RawEntry";

const Select = () => {
  const { data, addType } = useContext(BuilderContext);

  const selectChange = (e: SelectChangeEvent) => {
    const newType = +e.target.value as EntryType;
    addType(newType);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Type</InputLabel>
      <MSelect
        value={"" + data.type}
        onChange={selectChange}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Type"
      >
        <MenuItem value={"" + EntryType.LOSS}>Loss</MenuItem>
        <MenuItem value={"" + EntryType.PROFIT}>Profit</MenuItem>
      </MSelect>
    </FormControl>
  );
};

export default Select;
