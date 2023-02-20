import { Box, Button, SimpleGrid, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useContext } from "react";
import BotsContext from "../context/BotsContext";
import CardComponent from "../components/Card/Card";
import { useNavigate } from "react-router-dom";

function BotList() {
  const { bots, setBots } = useContext(BotsContext);
  const navigate = useNavigate();
  const handleRemoveBot = (id: string) => {
    setBots(bots?.filter((bot) => bot.id !== id));
  };
  const isMobile = useMediaQuery("(max-width: 600px)");
  if (bots?.length === 0) {
    return (
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <Text mx="auto" m={20}>
          Empty Bot
        </Text>
        <Button onClick={() => navigate("/add")}>Add Bot</Button>
      </Box>
    );
  }
  return (
    <SimpleGrid
      cols={4}
      mx={!isMobile ? "150px" : ""}
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: "md" },
        { maxWidth: 755, cols: 2, spacing: "sm" },
        { maxWidth: 600, cols: 1, spacing: "sm" },
      ]}
    >
      {bots?.map((bot, i) => (
        <CardComponent key={i} bot={bot} handleRemoveBot={handleRemoveBot} />
      ))}
    </SimpleGrid>
  );
}

export default BotList;
