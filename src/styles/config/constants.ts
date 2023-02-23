export const PX_BASE = "16px";

export const BREAKPOINTS = {
  bp0: 0,
  bp1: 688,
  bp2: 992,
  bp3: 1312,
};

export const BREAKPOINTS_QUERIES = {
  bp0: "(min-width:" + BREAKPOINTS.bp0 + "px)",
  bp1: "(min-width:" + BREAKPOINTS.bp1 + "px)",
  bp2: "(min-width:" + BREAKPOINTS.bp2 + "px)",
  bp3: "(min-width:" + BREAKPOINTS.bp3 + "px)",
};

export const GRID_COLUMN_SIZE = 12;

export const TRANSITIONS = {
  standardEasing: [0.4, 0.0, 0.2, 1],
  decelerateEasing: [0.0, 0.0, 0.2, 1],
  accelerateEasing: [0.4, 0.0, 1, 1],
};
