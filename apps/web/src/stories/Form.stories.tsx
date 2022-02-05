import { Button, ButtonProps, Input, InputProps } from "ui";

import SvgSolidGoogle from "../icons/Google";

function Form() {
  return (
    <div className="w-60">
      <div className="flex flex-col w-full">
        <Input placeholder="placeholder 1" className="mb-2" />
        <Input placeholder="placeholder 2" className="mb-2" />
      </div>
      <Button
        variant="primary"
        size="regular"
        className="w-full"
        icon={<SvgSolidGoogle />}
      >
        Submit
      </Button>
    </div>
  );
}

export default {
  Component: Form,
  title: "Form",
};

const Template = (args) => <Form {...args} />;

export const MyForm = Template.bind({});
