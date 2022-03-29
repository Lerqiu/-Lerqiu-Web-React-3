import React, { useContext } from "react";
import './Bar.css';

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { EntryType } from "../Entry/RawEntry";
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { BudgetContext } from "../../Context/BudgetContext";

type FormValues = {
  Description: string;
  Value: string;
};

const Bar = (props: { type: EntryType }) => {
  const { handleSubmit, control, reset } = useForm<FormValues>();
  const { add } = useContext(BudgetContext);

  const onSubmit = (data: FormValues) => {
    add({
      description: data.Description,
      value: data.Value,
      type: props.type,
    });
    reset();
  };

  return (
    <Box sx={{ flexGrow: 1, borderRadius: 16 }} className="BlueBorder">
      <form>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 2, mb: 2 }}
        >
          <Grid item xs={6}>
            <Controller
              name="Description"
              control={control}
              defaultValue=""
              rules={{required: true, minLength:3, maxLength:20}}
              render={({ field }) => (
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth={true}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={1}>
            <Controller
              name="Value"
              control={control}
              defaultValue="0"
              rules={{required: true, pattern :/^[0-9]+[.]{0,1}[0-9]{0,2}$/i}}
              render={({ field }) => (
                <TextField
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              size="medium"
            >
              Add record
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Bar;
