import { Input, InputProps } from "ui";

export default {
  Component: Input,
  title: "Input",
};

const Template = (args) => <Input {...args} />;

export const TextInput = Template.bind({});

TextInput.args = {
  placeholder: "placeholder",
  inputType: "text",
} as InputProps;

TextInput.argTypes = {
  placeholder: {
    control: {
      type: "text",
    },
  },
  inputType: {
    options: ["text", "password"],
    control: {
      type: "radio",
    },
  },
};
