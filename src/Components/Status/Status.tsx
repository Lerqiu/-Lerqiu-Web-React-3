import React, { useContext } from "react";
import { BudgetContext } from "../../Context/BudgetContext";
import { EntryType } from "../Entry/RawEntry";

import "./Status.css";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Status = () => {
  const { data } = useContext(BudgetContext);

  const profit = data.reduce(
    (prev, curr) => (curr.type === EntryType.PROFIT ? curr.value + prev : prev),
    0
  );
  const loss = data.reduce(
    (prev, curr) => (curr.type === EntryType.LOSS ? curr.value + prev : prev),
    0
  );

  return (
    <Box sx={{ flexGrow: 1, borderRadius: 16 }} className="BlueBorder">
      <Grid
        container
        spacing={2}
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ mt: 2, mb: 2 }}
      >
        <Grid item xs={3} className="StatusProfit">
          Profit: {Math.floor(profit * 100) / 100}
        </Grid>
        <Grid item xs={3} className="StatusLoss">
          Loss: {Math.floor(loss * 100) / 100}
        </Grid>
        <Grid item xs={3} className="StatusBalance">
          Balance: {Math.floor((profit - loss) * 100) / 100}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Status;
