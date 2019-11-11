import { appendFileSync, existsSync, mkdirSync, unlinkSync } from "fs";
import { join } from "path";

export const saveListToFile = (fileName: string, cardList: Array<string>): void => {
  const cwd = join(__dirname, "..", "..", "output");
  const file = join(cwd, `${fileName}.txt`);

  if (!existsSync(cwd)) {
    mkdirSync(cwd);
  }

  if (existsSync(file)) {
    unlinkSync(file);
  }

  for (const card of cardList) {
    appendFileSync(file, `${card}\n`);
  }
};
