import { style } from "@vanilla-extract/css";
import { vars } from "@styles/config/contract.css";
const SCROLLBAR_SIZE = 6;

const {
  colors: { harbour, jadedGinger },
} = vars;
export const scrollAreaRootStyle = style({
  width: "inherit",
  height: "inherit",
  borderRadius: 4,
  overflow: "hidden",
  backgroundColor: "white",
});

export const scrollAreaViewportStyle = style({
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
});

export const scrollAreaScrollbarStyle = style({
  display: "flex",
  // ensures no selection
  userSelect: "none",
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: "none",
  padding: "2px",
  transition: "background 160ms ease-out",
  selectors: {
    '&[data-orientation="vertical"]': { width: `${SCROLLBAR_SIZE}px` },
    '&[data-orientation="horizontal"]': {
      flexDirection: "column",
      height: `${SCROLLBAR_SIZE}px`,
    },
  },
});

export const scrollAreaThumbStyle = style({
  flex: 1,
  background: jadedGinger,
  borderRadius: `${SCROLLBAR_SIZE}px`,
  position: "relative",
  selectors: {
    "&:before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      height: "100%",
      minWidth: "14px",
      minHeight: "14px",
    },
  },
});

export const scrollAreaCornerStyle = style({
  background: "black",
});
