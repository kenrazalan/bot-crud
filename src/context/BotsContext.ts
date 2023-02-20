import React from "react";
import { Bot } from "./../types/types";
interface BotsContextType {
  bots: Bot[] | null;
  setBots: (value: any) => void;
}

const BotsContextDefault: BotsContextType = {
  bots: null,
  setBots: () => {},
};

const BotsContext = React.createContext<BotsContextType>(BotsContextDefault);

export default BotsContext;
