import { builder } from "@builder.io/sdk";
import { Builder } from "@builder.io/react";

builder.init("ffb2ed83b4ea4cbaa059204ca3693d3a");

// Register a custom insert menu to organize your custom componnets
// https://www.builder.io/c/docs/custom-components-visual-editor#:~:text=than%20this%20screenshot.-,organizing%20your%20components%20in%20custom%20sections,-You%20can%20create
Builder.register("insertMenu", {
  name: "Blocks",
  items: [{ name: "Text" }],
});

import "@components/modules/Text/Text.builder";
