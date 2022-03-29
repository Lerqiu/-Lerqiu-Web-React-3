import React from "react";
import Bar from "./Components/MainBar/Bar";
import "./App.css";
import BudgetContextProvider from "./Context/BudgetContext";
import BuilderContextProvider from "./Context/BuilderContext";
import List from "./Components/List/List";
import Status from "./Components/Status/Status";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Routing/Main";
import Loss from "./Routing/Loss";
import Profit from "./Routing/Profit";

const App = () => {
  return (
    <BudgetContextProvider>
      {/*
          <BuilderContextProvider>
            <Bar />
          </BuilderContextProvider>
          <Status />
          <List />
        </Stack>
      </Container> */}
      <BrowserRouter>
        <Header />
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/loss" element={<Loss />} />
              <Route path="/profit" element={<Profit />} />
            </Routes>
          </Stack>
        </Container>
      </BrowserRouter>
    </BudgetContextProvider>
  );
};

export default App;
