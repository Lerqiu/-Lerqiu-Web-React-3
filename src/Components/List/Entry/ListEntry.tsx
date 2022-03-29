import React, { useContext } from "react";
import { IEntry } from "../../Entry/FullEntry";
import { EntryType } from "../../Entry/RawEntry";

import { BudgetContext } from "../../../Context/BudgetContext";

import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import DelIcon from "@mui/icons-material/Delete";

const ListEntry = (props: { data: IEntry }) => {
  const myClassStyle =
    props.data.type === EntryType.PROFIT ? "#a0d911" : "#f5222d";

  const { remove } = useContext(BudgetContext);
  const onClick = () => {
    remove(props.data.id);
  };

  return (
    <Box
      sx={{ flexGrow: 1,borderRadius: 16  }}
      style={{ backgroundColor: myClassStyle } as React.CSSProperties}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          {props.data.description}
        </Grid>
        <Grid item xs={2}>
          {props.data.value}
        </Grid>
        <Grid item xs={2}>
          {props.data.type === EntryType.PROFIT ? "Profit" : "Loss"}
        </Grid>
        <Grid item xs={1} >
          <Fab color="primary" aria-label="del" onClick={onClick}>
            <DelIcon />
          </Fab>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ListEntry;
