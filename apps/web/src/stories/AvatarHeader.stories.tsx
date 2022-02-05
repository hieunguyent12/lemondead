import { AvatarHeader, AvatarHeaderProps } from "ui";

export default {
  component: AvatarHeader,
  title: "AvatarHeader",
};

const Template = (args) => <AvatarHeader {...args} />;

export const MyAvatarHeader = Template.bind({});

MyAvatarHeader.args = {
  name: "Hieu Nguyen",
} as AvatarHeaderProps;

MyAvatarHeader.argTypes = {
  name: {
    control: {
      type: "text",
    },
  },
};
