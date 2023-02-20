import { botsName } from "./bots";

export function getRandomBotName() {
  return botsName[Math.floor(Math.random() * botsName.length)];
}

export const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, function (txt: string) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
