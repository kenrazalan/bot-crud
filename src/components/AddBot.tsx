import React, { useContext } from "react";
import BotsContext from "../context/BotsContext";
import { Bot } from "../types/types";
import BotsForm from "./BotsForm";

function AddBot() {
  const { bots, setBots } = useContext(BotsContext);

  const handleOnSubmit = (bot: Bot) => {
    if (bots) {
      setBots([bot, ...bots]);
    }
  };
  return (
    <React.Fragment>
      <BotsForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
}

export default AddBot;
