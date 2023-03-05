import React, { FC } from "react";
import { Box } from "@components/primitives/Box/Box";
import { Heading } from "@components/primitives/Heading/Heading";
import { Text as TextPrimitive } from "@components/primitives/Text/Text";

type TextProps = { heading: string; text: string };

export const Text: FC<TextProps> = ({ heading, text }) => (
  <Box>
    {heading && <Heading size={"h2"}>{heading}</Heading>}
    {text && <TextPrimitive>{text}</TextPrimitive>}
  </Box>
);
