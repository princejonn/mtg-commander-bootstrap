import { appendFileSync, existsSync, mkdirSync, unlinkSync } from "fs";
import { join } from "path";
import { TBuildCardListResult } from "../types";
import { getCardText } from "./build-tool";

export const saveListToFile = (fileName: string, cardList: TBuildCardListResult): void => {
  const cwd = join(__dirname, "..", "..", "output");
  const file = join(cwd, `${fileName}.txt`);

  if (!existsSync(cwd)) {
    mkdirSync(cwd);
  }

  if (existsSync(file)) {
    unlinkSync(file);
  }

  for (const key in cardList.metadata) {
    const title = cardList.metadata[key].title;
    const amount = cardList.metadata[key].amount;

    appendFileSync(file, `${title}: ${amount}\n`);
  }

  appendFileSync(file, "\n");

  const simpleList = getCardText(cardList.cards);

  for (const card of simpleList) {
    appendFileSync(file, `${card}\n`);
  }
};
