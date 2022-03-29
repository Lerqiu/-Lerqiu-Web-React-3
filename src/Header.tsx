import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goTo = (s: string) => {
    // window.location.href = s;
    navigate(s);
  };

  return (
    <Box>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Button variant="text" onClick={() => goTo("/")}>
          Strony głównej
        </Button>
        <Button variant="text" onClick={() => goTo("/loss")}>Strony wydatków</Button>
        <Button variant="text" onClick={() => goTo("/profit")}>Strony przychodów</Button>
      </Stack>
    </Box>
  );
};

export default Header;
