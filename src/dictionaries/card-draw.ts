import { TCardArray } from "../types";
import { Color } from "../enums";
import { Guild, Shard } from "../constants";

export const CardDraw: TCardArray = [

  // WHITE

  {
    name: "Well of Lost Dreams",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },

  // BLUE

  {
    name: "Brainstorm",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Rhystic Study",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 4,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Mulldrifter",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Ponder",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Preordain",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },

  // BLACK

  {
    name: "Night's Whipser",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Sign in Blood",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Phyrexian Arena",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Read the Bones",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Greed",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Ambition's Cost",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },

  // GREEN

  {
    name: "Harmonize",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Sylvan Library",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 3,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Momentous Fall",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },

  // RED

  {
    name: "Faithless Looting",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.RED ],
    ],
  },
  {
    name: "Cathartic Reunion",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.RED ],
    ],
  },
];

export const Tutors: TCardArray = [

  // WHITE

  {
    name: "Enlightened Tutor",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },
  {
    name: "Idyllic Tutor",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.WHITE ],
    ],
  },

  // BLUE

  {
    name: "Mystical Tutor",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },
  {
    name: "Merchant Scroll",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 2,
    colorIdentity: [
      [ Color.BLUE ],
    ],
  },

  // BLACK

  {
    name: "Demonic Tutor",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Vampiric Tutor",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },
  {
    name: "Diabolic Tutor",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.BLACK ],
    ],
  },

  // GREEN

  {
    name: "Kodama's Reach",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Cultivate",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 5,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Fauna Shaman",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Natural Order",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },
  {
    name: "Chord of Calling",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.GREEN ],
    ],
  },

  // RED

  {
    name: "Gamble",
    casual: true,
    competitive: false,
    minColors: 1,
    maxColors: 1,
    colorIdentity: [
      [ Color.RED ],
    ],
  },

  // MULTI-COLOR

  {
    name: "Eladamri's Call",
    casual: true,
    competitive: false,
    minColors: 2,
    maxColors: 2,
    colorIdentity: [
      Guild.SELESNYA,
    ],
  },
  {
    name: "Wargate",
    casual: true,
    competitive: false,
    minColors: 3,
    maxColors: 3,
    colorIdentity: [
      Shard.BANT,
    ],
  },
];
