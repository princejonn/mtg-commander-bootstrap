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

export type TBasicLandList = {
  [key: string]: number;
}
