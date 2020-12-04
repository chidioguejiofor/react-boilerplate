import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Avatar, AvatarProps } from "components/shared/media/Avatar";

export default {
  title: "Media/Avatar",
  component: Avatar,
  argTypes: {
    backgroundColor: { control: "color" },
    frameColor: { control: "color" },
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const AvatarWithValidImage = Template.bind({});

AvatarWithValidImage.args = {
  src: "https://avatars3.githubusercontent.com/u/38565349?s=60&v=4",
  diameter: "3rem",
};

export const AvatarWithBrokenImage = Template.bind({});

AvatarWithBrokenImage.args = {
  src: "https://avatar65349?s=60&v=4",
  diameter: "3rem",
};

export const AvatarWithBrokenImageAndColors = Template.bind({});

AvatarWithBrokenImageAndColors.args = {
  src: "https://avatar65349?s=60&v=4",
  diameter: "3rem",
  backgroundColor: "orange",
  frameColor: "skyblue",
};

export const AvatarWithText = Template.bind({});

AvatarWithText.args = {
  src: "https://avatar65349?s=60&v=4",
  diameter: "3rem",
  backgroundColor: "orange",
  frameColor: "skyblue",
  noImageText: "+40",
};
