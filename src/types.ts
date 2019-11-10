import { Color } from "./enums";

export type TColorArray = Array<Color>;

export type TCard = {
  name: string;
  casual: boolean;
  competitive: boolean;
  minColors: number;
  maxColors: number;
  colorIdentity: Array<TColorArray>;
}

export type TCardArray = Array<TCard>;

export type TNumberValueObject = {
  [key: string]: number;
}

export type TSimpleCard = {
  name: string;
  amount: number;
}

export type TSimpleCardList = Array<TSimpleCard>;
