import { Box, Text } from "@mantine/core";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../components/Card/Card";
import BotsContext from "../context/BotsContext";

function ViewBot() {
  const { bots } = useContext(BotsContext);
  const { id } = useParams();
  const bot = bots?.find((bot) => bot.id === id);

  if (!bot) {
    return <Text>Bot not fount</Text>;
  }
  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <CardComponent bot={bot} hideButtons={true} />
    </Box>
  );
}

export default ViewBot;
