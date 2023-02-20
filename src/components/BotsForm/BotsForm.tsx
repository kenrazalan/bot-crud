import { Box, Button, Group, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Bot } from "../../types/types";

interface HeaderResponsiveProps {
  handleOnSubmit: (bot: Bot) => void;
}

function BotsForm({ handleOnSubmit }: HeaderResponsiveProps) {
  const form = useForm({
    initialValues: {
      id: "",
      name: "",
      purpose: "",
      src: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      purpose: (value) =>
        value.length < 2 ? "Purpose must have at least 2 letters" : null,
    },
  });
  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit(handleOnSubmit)}>
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

        <Group position="right" mt="md">
          <Button type="submit">Add Bot</Button>
        </Group>
      </form>
    </Box>
  );
}

export default BotsForm;
