import * as artifactRamp from "./dictionaries/artifact-ramp";
import * as enchantmentRamp from "./dictionaries/enchantment-ramp";
import * as lands from "./dictionaries/lands";
import { TBasicLandList, TCard, TCardArray, TColorArray } from "./types";
import { Color } from "./enums";
import { saveListToFile } from "./file-tool";

export const isCardAmountValid = (colorList: TColorArray, card: TCard): boolean => {
  return (
    colorList.length >= card.minColors &&
    colorList.length <= card.maxColors
  );
};

export const isSimilarColorIdentity = (colorList: TColorArray, identityArray: TColorArray): boolean => {
  const expect = identityArray.length;
  let actual = 0;

  for (const color of colorList) {
    if (identityArray.includes(color)) {
      actual += 1;
    }
  }

  return actual === expect;
};

export const isCardColorIdentityValid = (colorList: TColorArray, card: TCard): boolean => {
  const { colorIdentity } = card;

  for (const identityArray of colorIdentity) {
    if (isSimilarColorIdentity(colorList, identityArray)) {
      return true;
    }
  }

  return false;
};

export const getMatchingCards = (colorList: TColorArray, cardList: TCardArray): Array<string> => {
  const result: Array<string> = [];

  for (const card of cardList) {
    if (
      card.casual &&
      isCardAmountValid(colorList, card) &&
      isCardColorIdentityValid(colorList, card)
    ) {
      result.push(`1 ${card.name}`);
    }
  }

  return result;
};

export const getBasicLand = (color: Color): TCard => {
  for (const land of lands.BasicLands) {
    if (isCardColorIdentityValid([color], land)) {
      return land;
    }
  }

  throw new Error(`land not found for color identity: ${color}`);
};

export const getBasicLandsList = (colorList: TColorArray, missingBasicLands: number): TBasicLandList => {
  let landsLeft = missingBasicLands;
  const list: TBasicLandList = {};
  const result: TBasicLandList = {};

  for (const color of colorList) {
    const land = getBasicLand(color);
    list[land.name] = 0;
  }

  while (landsLeft > 0) {
    for (const color of colorList) {
      if (landsLeft === 0) continue;
      const land = getBasicLand(color);
      list[land.name] += 1;
      landsLeft -= 1;
    }
  }

  for (const key in list) {
    if (list[key] === 0) continue;
    result[key] = list[key];
  }

  return result;
};

export const getBasicLands = (colorList: TColorArray, missingBasicLands: number): Array<string> => {
  const basicLands: TBasicLandList = getBasicLandsList(colorList, missingBasicLands);
  const result: Array<string> = [];

  for (const key in basicLands) {
    result.push(`${basicLands[key]} ${key}`);
  }

  return result;
};

export const buildCardList = (fileName: string, colorList: TColorArray): void => {
  const landList: Array<string> = [
    ...getMatchingCards(colorList, lands.DefaultLands),
    ...getMatchingCards(colorList, lands.LegendaryLands),
    ...getMatchingCards(colorList, lands.DualLands),
    ...getMatchingCards(colorList, lands.PainLands),
    ...getMatchingCards(colorList, lands.BattleLands),
    ...getMatchingCards(colorList, lands.BondLands),
    ...getMatchingCards(colorList, lands.CheckLands),
    ...getMatchingCards(colorList, lands.FastLands),
    ...getMatchingCards(colorList, lands.RevealLands),
    ...getMatchingCards(colorList, lands.ShockLands),
    ...getMatchingCards(colorList, lands.FetchLands),
    ...getMatchingCards(colorList, lands.FilterLands),
    ...getMatchingCards(colorList, lands.GuildHalls),
    ...getMatchingCards(colorList, lands.TaintedLands),
    ...getMatchingCards(colorList, lands.ShardLands),
    ...getMatchingCards(colorList, lands.ArtifactLands),
  ];

  const artifactList: Array<string> = [
    ...getMatchingCards(colorList, artifactRamp.DefaultArtifacts),
    ...getMatchingCards(colorList, artifactRamp.Diamonds),
    ...getMatchingCards(colorList, artifactRamp.Medallions),
    ...getMatchingCards(colorList, artifactRamp.Signets),
    ...getMatchingCards(colorList, artifactRamp.Talismans),
    ...getMatchingCards(colorList, artifactRamp.Obelisks),
    ...getMatchingCards(colorList, artifactRamp.Banners),
  ];

  const enchantmentList: Array<string> = [
    ...getMatchingCards(colorList, enchantmentRamp.DefaultEnchantments),
    ...getMatchingCards(colorList, enchantmentRamp.TransformLand),
  ];

  const total = landList.length + artifactList.length + enchantmentList.length;
  const missingBasicLands = 48 - total;

  const totalList: Array<string> = [
    ...landList,
    ...artifactList,
    ...enchantmentList,
    ...getBasicLands(colorList, missingBasicLands),
  ];

  saveListToFile(fileName, totalList);
};
