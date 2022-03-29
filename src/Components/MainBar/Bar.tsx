import React, { useContext } from "react";
import { BuilderContext } from "../../Context/BuilderContext";
import InputDescription from "./Inputs/InputDescription";
import InputNumber from "./Inputs/InputNumber";
import Select from "./SelectType/Select";

import "./Bar.css";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { EntryType } from "../Entry/RawEntry";

const Bar = (props: { type: EntryType }) => {
  const { commit, addType } = useContext(BuilderContext);
  addType(props.type);

  return (
    <Box sx={{ flexGrow: 1, borderRadius: 16 }} className="BlueBorder">
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 2, mb: 2 }}
      >
        <Grid item xs={6}>
          <InputDescription />
        </Grid>
        {/* <Grid item xs={2}>
          <Select />
        </Grid> */}
        <Grid item xs={1}>
          <InputNumber />
        </Grid>
        <Grid item xs={2}>
          <Button onClick={commit} variant="contained" size="medium">
            Add record
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Bar;
