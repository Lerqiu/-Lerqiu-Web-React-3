import React, { useContext } from "react";
import { BudgetContext } from "../../Context/BudgetContext";
import ListEntry from "./Entry/ListEntry";
import Stack from "@mui/material/Stack";
import { EntryType } from "../Entry/RawEntry";

const List = (props: { type: EntryType }) => {
  const { data } = useContext(BudgetContext);

  return (
    <Stack sx={{ m: 2, p: 2 }} spacing={2}>
      {data
        .filter((entry) => entry.type === props.type)
        .map((entry) => (
          <ListEntry data={entry} key={entry.id} />
        ))}
    </Stack>
  );
};

export default List;
