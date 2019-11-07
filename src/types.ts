export type TColorInput = {
  [key: string]: boolean;
}

export type TCardColors = {
  [key: string]: boolean;
  any?: boolean;
  white?: boolean;
  blue?: boolean;
  black?: boolean;
  green?: boolean;
  red?: boolean;
}

export type TCard = {
  name: string;
  casual: boolean;
  minColors: number;
  maxColors: number;
  colors: TCardColors;
}

export type TCardArray = Array<TCard>
