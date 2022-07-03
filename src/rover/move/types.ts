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

export type SpinType = {
  L: {
    N: string;
    W: string;
    S: string;
    E: string;
  };
  R: {
    N: string;
    S: string;
    E: string;
    W: string;
  };
};
