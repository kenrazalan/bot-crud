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
import useLocalStorage from "./hooks/useLocalStorage";
import { links } from "./components/Header/styles";

function App() {
  const [bots, setBots] = useLocalStorage("bots", []);

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
