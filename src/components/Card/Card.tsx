import { Button, Card, Group, Image, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Bot } from "../../types/types";
import { toTitleCase } from "../utils/helpers";
import { useStyles } from "./styles";

interface CardComponentProps {
  bot: Bot;
  handleRemoveBot?: (id: string) => void;
  hideButtons?: boolean;
}

function CardComponent({
  bot,
  handleRemoveBot,
  hideButtons = false,
}: CardComponentProps) {
  const { classes } = useStyles();
  const navigate = useNavigate();
  return (
    <Card withBorder p="lg" className={classes.card}>
      <Card.Section>
        <Image src={bot.src} alt={"robot"} />
      </Card.Section>

      <Group position="apart" mt="xl">
        <Text size="sm" weight={700} className={classes.title}>
          {toTitleCase(bot.name)}
        </Text>
      </Group>
      <Text mt="sm" mb="md" color="dimmed" size="xs">
        {toTitleCase(bot.purpose)}
      </Text>
      {!hideButtons && (
        <Group position="apart" spacing={5}>
          <Button onClick={() => navigate(`view/${bot.id}`)} size="xs">
            View
          </Button>
          <Button onClick={() => navigate(`edit/${bot.id}`)} size="xs">
            Edit
          </Button>
          {handleRemoveBot && (
            <Button
              onClick={() => handleRemoveBot(bot.id)}
              size="xs"
              color="red"
            >
              Delete
            </Button>
          )}
        </Group>
      )}
    </Card>
  );
}

export default CardComponent;
