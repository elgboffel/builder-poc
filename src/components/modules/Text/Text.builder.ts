//  This is a minimal example of a custom component, you can view more complex input types here:
//  https://www.builder.io/c/docs/custom-react-components#input-types
import { Builder } from "@builder.io/react";
import { Text } from "./Text";

Builder.registerComponent(Text, {
  name: "BodyText",
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/align-box-left-middle.png",
  models: ["page"],
  inputs: [
    { name: "heading", type: "string", defaultValue: "Heading" },
    {
      name: "text",
      type: "string",
      defaultValue: "Text",
    },
  ],
});
