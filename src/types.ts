export type cleanInputType = string[];
export type outputArray = outputData[];
export type PlateauInput = cleanInputType | undefined[];
export type outputData = {
  position: { x: number; y: number };
  direction: string;
};
