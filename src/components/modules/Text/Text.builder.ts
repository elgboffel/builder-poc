//  This is a minimal example of a custom component, you can view more complex input types here:
//  https://www.builder.io/c/docs/custom-react-components#input-types
import { Builder } from "@builder.io/react";
import { Text } from "./Text";
import { Input } from "@builder.io/sdk";

const textSchema: Input[] = [
  { name: "heading", type: "string", defaultValue: "Add heading" },
  { name: "text", type: "richText", defaultValue: "<p>Add text</p>" },
];

Builder.registerComponent(Text, {
  name: "Text",
  models: ["page"],
  override: true,
  inputs: textSchema,
});
