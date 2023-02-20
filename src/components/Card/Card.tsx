import { Button, Card, Group, Image, Text } from "@mantine/core";
import { Bot } from "../../types/types";
import { toTitleCase } from "../utils/helpers";
import { useStyles } from "./styles";

interface CardComponentProps {
  bot: Bot;
  handleRemoveBot: (id: string) => void;
}

function CardComponent({ bot, handleRemoveBot }: CardComponentProps) {
  const { classes } = useStyles();

  return (
    <Card withBorder p="lg" className={classes.card}>
      <Card.Section>
        <Image src={bot.src} alt={"asd"} />
      </Card.Section>

      <Group position="apart" mt="xl">
        <Text size="sm" weight={700} className={classes.title}>
          {toTitleCase(bot.name)}
        </Text>
        <Group spacing={5}>
          <Button onClick={() => handleRemoveBot(bot.id)} size="xs" color="red">
            Delete
          </Button>
        </Group>
      </Group>
      <Text mt="sm" mb="md" color="dimmed" size="xs">
        {toTitleCase(bot.purpose)}
      </Text>
    </Card>
  );
}

export default CardComponent;
