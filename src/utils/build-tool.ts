import * as artifacts from "../dictionaries/artifacts";
import * as creatures from "../dictionaries/creatures";
import * as enchantments from "../dictionaries/enchantments";
import * as lands from "../dictionaries/lands";
import * as removals from "../dictionaries/removals";
import * as utility from "../dictionaries/utility";
import { TNumberValueObject, TCard, TCardArray, TColorArray, TSimpleCardList, TBuildCardListResult } from "../types";
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

export const buildCardList = (colorList: TColorArray): TBuildCardListResult => {
  const landList: TSimpleCardList = [
    ...getMatchingCards(colorList, lands.ArtifactLands),
    ...getMatchingCards(colorList, lands.BattleLands),
    ...getMatchingCards(colorList, lands.BondLands),
    ...getMatchingCards(colorList, lands.BounceLands),
    ...getMatchingCards(colorList, lands.CyclingLands),
    ...getMatchingCards(colorList, lands.DualLands),
    ...getMatchingCards(colorList, lands.FetchLands),
    ...getMatchingCards(colorList, lands.FetchLandsOnslaught),
    ...getMatchingCards(colorList, lands.FetchLandsPanorama),
    ...getMatchingCards(colorList, lands.FetchLandsZendikar),
    ...getMatchingCards(colorList, lands.FilterLands),
    ...getMatchingCards(colorList, lands.FilterLandsEventide),
    ...getMatchingCards(colorList, lands.FilterLandsShadowmoor),
    ...getMatchingCards(colorList, lands.HideawayLands),
    ...getMatchingCards(colorList, lands.LegendaryLands),
    ...getMatchingCards(colorList, lands.MultiColoredLands),
    ...getMatchingCards(colorList, lands.ShardLands),
    ...getMatchingCards(colorList, lands.ShockLands),
    ...getMatchingCards(colorList, lands.TribalLands),
    ...getMatchingCards(colorList, lands.UncoloredLands),
    ...getMatchingCards(colorList, lands.UtilityLands),
  ];

  const artifactRampList: TSimpleCardList = [
    ...getMatchingCards(colorList, artifacts.ArtifactRamp),
    ...getMatchingCards(colorList, artifacts.BannerRamp),
    ...getMatchingCards(colorList, artifacts.DiamondRamp),
    ...getMatchingCards(colorList, artifacts.MedallionRamp),
    ...getMatchingCards(colorList, artifacts.ObeliskRamp),
    ...getMatchingCards(colorList, artifacts.SignetRamp),
    ...getMatchingCards(colorList, artifacts.TalismanRamp),
  ];

  const spellRamp: TSimpleCardList = [
    ...getMatchingCards(colorList, enchantments.EnchantmentRamp),
    ...getMatchingCards(colorList, creatures.CreatureRamp),
    ...getMatchingCards(colorList, utility.SpellRamp),
  ];

  const total = landList.length + artifactRampList.length + spellRamp.length;
  const missingBasicLands = 45 - total;

  const cardDrawList: TSimpleCardList = [
    ...getMatchingCards(colorList, utility.CardDraw),
    ...getMatchingCards(colorList, utility.Tutors),
  ];

  const removalsList: TSimpleCardList = [
    ...getMatchingCards(colorList, removals.Targeted),
    ...getMatchingCards(colorList, removals.Board),
  ];

  const utilityList: TSimpleCardList = [
    ...getMatchingCards(colorList, utility.DefaultUtility),
    ...getMatchingCards(colorList, utility.Charms),
    ...getMatchingCards(colorList, utility.Counters),
    ...getMatchingCards(colorList, utility.TransformLand),
  ];

  const creaturesList: TSimpleCardList = [
    ...getMatchingCards(colorList, creatures.Creatures),
  ];

  return {
    metadata: {
      lands: {
        title: "Lands",
        amount: landList.length + missingBasicLands,
      },
      manaRamp: {
        title: "Mana Ramp",
        amount: artifactRampList.length + spellRamp.length,
      },
      cardDraw: {
        title: "Card Draw",
        amount: cardDrawList.length,
      },
      removals: {
        title: "Removals",
        amount: removalsList.length,
      },
      utility: {
        title: "Utility",
        amount: utilityList.length,
      },
      creatures: {
        title: "Creatures",
        amount: creaturesList.length,
      },
    },
    cards: [
      ...landList,
      ...getBasicLands(colorList, missingBasicLands),
      ...artifactRampList,
      ...spellRamp,
      ...cardDrawList,
      ...removalsList,
      ...utilityList,
      ...creaturesList,
    ],
  };
};

export const buildToFile = (fileName: string, colorList: TColorArray): void => {
  saveListToFile(fileName, buildCardList(colorList));
};
