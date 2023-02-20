import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BotsContext from "../context/BotsContext";
import { Bot } from "../types/types";
import BotsForm from "../components/BotsForm/BotsForm";
import { v4 as uuidv4 } from "uuid";
import { getRandomBotName } from "../components/utils/helpers";

function AddBot() {
  const { bots, setBots } = useContext(BotsContext);
  const navigate = useNavigate();
  const handleOnSubmit = (bot: Bot) => {
    bot.id = uuidv4();
    const randomAvatar = getRandomBotName();
    bot.src = `https://api.dicebear.com/5.x/bottts/svg?seed=${randomAvatar}`;
    if (bots) {
      setBots([bot, ...bots]);
      navigate("/");
    }
  };
  return (
    <React.Fragment>
      <BotsForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
}

export default AddBot;
