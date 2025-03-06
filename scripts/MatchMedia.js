import pxToRem from "./utils.js";

export const MatchMedia = {
  mobile: window.matchMedia(`(width <= ${pxToRem(767.98)}px)`),
};
