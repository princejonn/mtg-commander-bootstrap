import * as artifactsRamp from "./dictionaries/artifacts-ramp";
import * as lands from "./dictionaries/lands";
import { TCard, TCardArray, TColorInput } from "./types";

const getAmount = (colors: TColorInput): number => {
  let count: number = 0;

  Object.keys(colors).forEach((key: string) => {
    if (colors[key]) count += 1;
  });

  return count;
};

const matchingAmount = (colors: TColorInput, card: TCard): boolean => {
  const amount: number = getAmount(colors);

  return (
    amount >= card.minColors &&
    amount <= card.maxColors
  );
};

const matchingColors = (colors: TColorInput, card: TCard): boolean => {
  if (card.colors.any) return true;

  const matchingExpect: number = getAmount(card.colors);
  let matchingActual: number = 0;

  Object.keys(colors).forEach((key: string) => {
    if (colors[key] && card.colors[key]) matchingActual += 1;
  });

  return matchingActual >= matchingExpect;
};

const getList = (colors: TColorInput, dictionary: TCardArray): TCardArray => {
  const list: TCardArray = [];

  dictionary.forEach((card: TCard) => {
    if (
      card.casual &&
      matchingAmount(colors, card) &&
      matchingColors(colors, card)
    ) {
      list.push(card);
    }
  });

  return list;
};

const build = (colors: TColorInput): void => {
  const masterList: TCardArray = [
    ...getList(colors, artifactsRamp.DefaultArtifacts),
    ...getList(colors, artifactsRamp.Diamonds),
    ...getList(colors, artifactsRamp.Medallions),
    ...getList(colors, artifactsRamp.Signets),
    ...getList(colors, artifactsRamp.Talismans),
    ...getList(colors, artifactsRamp.Obelisks),
    ...getList(colors, artifactsRamp.Banners),
    ...getList(colors, lands.DefaultLands),
    ...getList(colors, lands.LegendaryLands),
    ...getList(colors, lands.DualLands),
    ...getList(colors, lands.PainLands),
    ...getList(colors, lands.BattleLands),
    ...getList(colors, lands.BondLands),
    ...getList(colors, lands.CheckLands),
    ...getList(colors, lands.FastLands),
    ...getList(colors, lands.RevealLands),
    ...getList(colors, lands.ShockLands),
    ...getList(colors, lands.FetchLands),
    ...getList(colors, lands.FilterLands),
    ...getList(colors, lands.GuildHalls),
    ...getList(colors, lands.TaintedLands),
    ...getList(colors, lands.ShardLands),
    ...getList(colors, lands.ArtifactLands),
  ];

  const basics: number = 46 - masterList.length;
  const amount: number = getAmount(colors);
  const split: number = Math.round(basics / amount);

  const basicsList: Array<object> = [];

  if (basics > 0) {
    lands.BasicLands.forEach((card : TCard) => {
      Object.keys(card.colors).forEach((key : string) => {
        if (card.colors[ key ] && colors[ key ]) {
          basicsList.push({
            name : card.name,
            amount : split,
          });
        }
      });
    });
  }

  console.log(amount, masterList.length, basics, split);
  console.log(basicsList);
};

void build({ white: true });
void build({ white: true, blue: true });
void build({ white: true, blue: true, black: true });
void build({ white: true, blue: true, black: true, green: true });
void build({ white: true, blue: true, black: true, green: true, red: true });
