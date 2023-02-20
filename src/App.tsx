import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BotList from "./pages/BotList";
import { MantineProvider } from "@mantine/core";
import { HeaderComponent } from "./components/Header/Header";
import useLocalStorage from "./hooks/useLocalStorage";
import { links } from "./components/Header/styles";
import BotsContext from "./context/BotsContext";
import AddBot from "./pages/AddBot";
import EditBot from "./pages/EditBot";
import ViewBot from "./pages/ViewBot";

function App() {
  const [bots, setBots] = useLocalStorage("bots", []);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <BotsContext.Provider value={{ bots, setBots }}>
          <HeaderComponent links={links} />
          <Routes>
            <Route element={<BotList />} path="/" />
            <Route element={<AddBot />} path="/add" />
            <Route element={<EditBot />} path="/edit/:id" />
            <Route element={<ViewBot />} path="/view/:id" />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BotsContext.Provider>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
