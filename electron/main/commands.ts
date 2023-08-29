import { REST, Routes } from "discord.js";
import "dotenv/config";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

if (!process.env.DISCORD_BOT_TOKEN) {
  console.error("Unable to get token.");
} else {
  const rest = new REST({ version: "10" }).setToken(
    process.env.DISCORD_BOT_TOKEN
  );

  console.log("Started refreshing application (/) commands.");

  rest
    .put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), {
      body: commands,
    })
    .then(() => {
      console.log("Successfully reloaded application (/) commands.");
    })
    .catch(console.error);
}
