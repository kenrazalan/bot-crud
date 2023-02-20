import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BotsContext from "../context/BotsContext";
import { Bot } from "../types/types";
import BotsForm from "../components/BotsForm/BotsForm";

function EditBot() {
  const { bots, setBots } = useContext(BotsContext);
  const navigate = useNavigate();
  const { id } = useParams();
  let botToEdit = bots?.find((bot) => bot.id === id);

  const handleOnSubmit = (bot: Bot) => {
    if (bots) {
      const filteredBots = bots?.filter((bot) => bot.id !== id);
      const index = bots?.findIndex((bot) => bot.id === id);
      filteredBots.splice(index, 0, bot);
      setBots(filteredBots);
      navigate("/");
    }
  };
  return (
    <React.Fragment>
      <BotsForm botToEdit={botToEdit} handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
}

export default EditBot;
