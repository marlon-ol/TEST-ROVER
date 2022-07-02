export type cartesianPlane = {
  x: number;
  y: number;
};

export type driveAction = {
  N: cartesianPlane;
  S: cartesianPlane;
  E: cartesianPlane;
  W: cartesianPlane;
};
