import { ComplexStyleRule } from "@vanilla-extract/css";

export type RecipeStyleRule = ComplexStyleRule | string;
export type VariantDefinitions = Record<string, RecipeStyleRule>;
export type VariantGroups = Record<string, VariantDefinitions>;
