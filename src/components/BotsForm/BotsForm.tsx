import { Box, Button, Group, Image, TextInput, Text } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Bot } from "../../types/types";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { getRandomBotName } from "../utils/helpers";
interface HeaderResponsiveProps {
  handleOnSubmit: (bot: Bot) => void;
  botToEdit?: Bot;
}

function BotsForm({ handleOnSubmit, botToEdit }: HeaderResponsiveProps) {
  const [image, setImage] = useState(
    botToEdit
      ? botToEdit.src
      : "https://api.dicebear.com/5.x/bottts/svg?seed=Fluffy"
  );

  const initialValues = botToEdit
    ? botToEdit
    : {
        id: "",
        name: "",
        purpose: "",
        src: "https://api.dicebear.com/5.x/bottts/svg?seed=Fluffy",
      };
  const form = useForm({
    initialValues,
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      purpose: (value) =>
        value.length < 2 ? "Purpose must have at least 2 letters" : null,
    },
  });

  const randomImage = () => {
    const randomName = getRandomBotName();
    setImage(`https://api.dicebear.com/5.x/bottts/svg?seed=${randomName}`);
    form.setFieldValue(
      "src",
      `https://api.dicebear.com/5.x/bottts/svg?seed=${randomName}`
    );
  };
  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit(handleOnSubmit)}>
        <Image src={image} alt={"robot"} />
        <Group position="center" mt="md">
          <Button onClick={() => randomImage()}>Generate Image</Button>
        </Group>

        <TextInput
          withAsterisk
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          withAsterisk
          label="Purpose"
          placeholder="Purpose"
          {...form.getInputProps("purpose")}
        />

        <Group position="center" mt="md">
          <Button type="submit">{botToEdit ? "Edit" : "Add"} Bot</Button>
        </Group>
      </form>
    </Box>
  );
}

export default BotsForm;
