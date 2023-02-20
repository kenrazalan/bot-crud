import React from "react";
import logo from "./logo.svg";

import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  Navigate,
} from "react-router-dom";
import BotList from "./components/BotList";
import { MantineProvider } from "@mantine/core";
import { HeaderComponent } from "./components/Header/Header";

function App() {
  const links = [
    {
      link: "/",
      label: "Bot List",
    },
    {
      link: "/add",
      label: "Add Bot",
    },
  ];

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <HeaderComponent links={links} />
        <div>
          <Routes>
            <Route element={<BotList />} path="/" />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
