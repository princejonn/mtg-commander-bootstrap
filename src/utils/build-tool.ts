import * as artifactRamp from "../dictionaries/artifact-ramp";
import * as cardDraw from "../dictionaries/card-draw";
import * as creatureRamp from "../dictionaries/creature-ramp";
import * as enchantmentRamp from "../dictionaries/enchantment-ramp";
import * as lands from "../dictionaries/lands";
import * as removals from "../dictionaries/removals";
import * as tutors from "../dictionaries/tutors";
import * as utility from "../dictionaries/utility";
import { TNumberValueObject, TCard, TCardArray, TColorArray, TSimpleCardList } from "../types";
import { Color } from "../enums";
import { saveListToFile } from "./file-tool";
import winstonLogger from "./logger";

const logger = winstonLogger.createChildLogger("build-tool");

export const isCardAmountValid = (colorList: TColorArray, card: TCard): boolean => {
  logger.debug("isCardAmountValid", colorList, { min: card.minColors, max: card.maxColors });

  return (
    colorList.length >= card.minColors &&
    colorList.length <= card.maxColors
  );
};

export const isSimilarColorIdentity = (colorList: TColorArray, identityArray: TColorArray): boolean => {
  logger.debug("isSimilarColorIdentity", colorList, identityArray);

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

  logger.debug("isCardColorIdentityValid", colorList, colorIdentity);

  for (const identityArray of colorIdentity) {
    if (isSimilarColorIdentity(colorList, identityArray)) {
      return true;
    }
  }

  return false;
};

export const getMatchingCards = (colorList: TColorArray, cardList: TCardArray): TSimpleCardList => {
  const result: TSimpleCardList = [];

  for (const card of cardList) {
    if (
      card.casual &&
      isCardAmountValid(colorList, card) &&
      isCardColorIdentityValid(colorList, card)
    ) {
      logger.debug("getMatchingCards result.push", card);

      result.push({
        name: card.name,
        amount: 1,
      });
    }
  }

  return result;
};

export const getBasicLand = (color: Color): TCard => {
  for (const land of lands.BasicLands) {
    if (isCardColorIdentityValid([color], land)) {
      logger.debug("getBasicLand", color, land);
      return land;
    }
  }

  throw new Error(`land not found for color identity: ${color}`);
};

export const getBasicLands = (colorList: TColorArray, missingBasicLands: number): TSimpleCardList => {
  let landsLeft = missingBasicLands;
  const list: TNumberValueObject = {};
  const result: TSimpleCardList = [];

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
    result.push({
      name: key,
      amount: list[key],
    });
  }

  logger.debug("getBasicLands", result);

  return result;
};

export const getCardText = (cardList: TSimpleCardList): Array<string> => {
  const result: Array<string> = [];

  for (const card of cardList) {
    result.push(`${card.amount} ${card.name}`);
  }

  return result;
};

export const buildCardList = (colorList: TColorArray): TSimpleCardList => {
  const landList: TSimpleCardList = [
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

  const artifactRampList: TSimpleCardList = [
    ...getMatchingCards(colorList, artifactRamp.DefaultArtifacts),
    ...getMatchingCards(colorList, artifactRamp.Diamonds),
    ...getMatchingCards(colorList, artifactRamp.Medallions),
    ...getMatchingCards(colorList, artifactRamp.Signets),
    ...getMatchingCards(colorList, artifactRamp.Talismans),
    ...getMatchingCards(colorList, artifactRamp.Obelisks),
    ...getMatchingCards(colorList, artifactRamp.Banners),
  ];

  const creatureRampList: TSimpleCardList = [
    ...getMatchingCards(colorList, creatureRamp.CreatureRamp),
  ];

  const enchantmentRampList: TSimpleCardList = [
    ...getMatchingCards(colorList, enchantmentRamp.DefaultEnchantments),
    ...getMatchingCards(colorList, enchantmentRamp.TransformLand),
  ];

  const total = landList.length + artifactRampList.length + creatureRampList.length + enchantmentRampList.length;
  const missingBasicLands = 46 - total;

  const cardDrawList: TSimpleCardList = [
    ...getMatchingCards(colorList, cardDraw.CardDraw),
  ];

  const removalsList: TSimpleCardList = [
    ...getMatchingCards(colorList, removals.Targeted),
    ...getMatchingCards(colorList, removals.Board),
  ];

  const tutorsList: TSimpleCardList = [
    ...getMatchingCards(colorList, tutors.Tutors),
  ];

  const utilityList: TSimpleCardList = [
    ...getMatchingCards(colorList, utility.Charms),
    ...getMatchingCards(colorList, utility.Counters),
  ];

  return [
    ...landList,
    ...getBasicLands(colorList, missingBasicLands),
    ...artifactRampList,
    ...enchantmentRampList,
    ...creatureRampList,
    ...cardDrawList,
    ...removalsList,
    ...tutorsList,
    ...utilityList,
  ];
};

export const buildToFile = (fileName: string, colorList: TColorArray) => {
  saveListToFile(fileName, getCardText(buildCardList(colorList)));
};