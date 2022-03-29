import React, { useContext } from "react";
import "./Bar.css";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { EntryType } from "../Entry/RawEntry";
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { BudgetContext } from "../../Context/BudgetContext";
import Alert from "@mui/material/Alert";

type FormValues = {
  Description: string;
  Value: string;
};

const Bar = (props: { type: EntryType }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
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
            <Stack>
              <Controller
                name="Description"
                control={control}
                defaultValue=""
                rules={{ required: true, minLength: 3, maxLength: 20 }}
                render={({ field }) => (
                  <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth={true}
                    {...field}
                  />
                )}
              />
              {errors.Description?.type === "required" && (
                <Alert severity="error" sx={{ sl: 2, sr: 2 }}>
                  "Description is required"
                </Alert>
              )}
              {errors.Description?.type === "minLength" && (
                <Alert severity="error" sx={{ sl: 2, sr: 2 }}>
                  "Min Description len is 3"
                </Alert>
              )}
              {errors.Description?.type === "maxLength" && (
                <Alert severity="error" sx={{ sl: 2, sr: 2 }}>
                  "Max Description len is 20"
                </Alert>
              )}
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Stack>
              <Controller
                name="Value"
                control={control}
                defaultValue="0"
                rules={{
                  required: true,
                  pattern: /^[0-9]+[.]{0,1}[0-9]{0,2}$/i,
                }}
                render={({ field }) => (
                  <TextField
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    {...field}
                  />
                )}
              />
              {errors.Value?.type === "required" && (
                <Alert severity="error" sx={{ sl: 2, sr: 2 }}>
                  "Value is required"
                </Alert>
              )}
              {errors.Value?.type === "pattern" && (
                <Alert severity="error" sx={{ sl: 2, sr: 2 }}>
                  "Value must be represent correct price."
                </Alert>
              )}
            </Stack>
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
