import { TCardArray } from "../types";
import { Color } from "../enums";
import { Guild, Shard } from "../constants";

export const DefaultUtility: TCardArray = [

  // WHITE


  // BLUE


  // BLACK

  {
    name: "Dread Return",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },

  // GREEN

  {
    name: "Eternal Witness",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Regrowth",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },

  // RED


  // MULTI-COLORED
];

export const Charms: TCardArray = [

  // GUILDS

  {
    name: "Azorius Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
  {
    name: "Dimir Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.DIMIR,
    ],
  },
  {
    name: "Rakdos Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.RAKDOS,
    ],
  },
  {
    name: "Gruul Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.GRUUL,
    ],
  },
  {
    name: "Selesnya Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
  {
    name: "Orzhov Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.ORZHOV,
    ],
  },
  {
    name: "Izzet Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.IZZET,
    ],
  },
  {
    name: "Golgari Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.GOLGARI,
    ],
  },
  {
    name: "Boros Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.BOROS,
    ],
  },
  {
    name: "Simic Charm",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 3,
    colorIdentity: [
      Guild.SIMIC,
    ],
  },

  // SHARDS

  {
    name: "Bant Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.BANT,
    ],
  },
  {
    name: "Esper Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.ESPER,
    ],
  },
  {
    name: "Grixis Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.GRIXIS,
    ],
  },
  {
    name: "Jund Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.JUND,
    ],
  },
  {
    name: "Naya Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.NAYA,
    ],
  },
  {
    name: "Abzan Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.ABZAN,
    ],
  },
  {
    name: "Jeskai Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.JESKAI,
    ],
  },
  {
    name: "Sultai Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.SULTAI,
    ],
  },
  {
    name: "Mardu Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.MARDU,
    ],
  },
  {
    name: "Temur Charm",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.TEMUR,
    ],
  },
];

export const Counters: TCardArray = [

  // WHITE

  {
    name: "Teferi's Protection",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },

  // BLUE

  {
    name: "Counterspell",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Mana Drain",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Swan Song",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Negate",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },

  // BLACK


  // GREEN


  // RED

  {
    name: "Red Elemental Blast",
    casual: false,
    competitive: true,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.RED ],
    ],
  },

  // MULTI-COLORED

  {
    name: "Dovin's Veto",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 5,
    colorIdentity: [
      Guild.AZORIUS,
    ],
  },
];
