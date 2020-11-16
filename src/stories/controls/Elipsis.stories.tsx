import React from "react";
import Elipsis, { ElipsisProps } from "components/lib/controls/Elipsis";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Controls/Elipsis",
  component: Elipsis,
  argTypes: {
    itemColor: { control: "color" },
  },
} as Meta;

const Template: Story<ElipsisProps> = (args) => <Elipsis {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 10,
  activeIndex: 0,
  flatten: false,
  itemColor: "blue",
};
