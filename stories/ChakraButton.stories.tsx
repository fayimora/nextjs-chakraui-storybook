import { ComponentMeta } from "@storybook/react";
import SignUpCard from "../components/SignUpCard";
import { ChakraButton } from "./ChakraButton";

export default {
  title: "Example/ChakraButton",
  component: ChakraButton,
} as ComponentMeta<typeof ChakraButton>;

export const Main = () => <SignUpCard />;
