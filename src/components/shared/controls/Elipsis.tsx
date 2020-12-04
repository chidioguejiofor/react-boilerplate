import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

export type ElipsisProps = {
  /**
   * This determines how many elipsis would be created
   */
  size: number;
  /**
   * zero based index that determines which of those elipsis would be selected
   */
  activeIndex: number;

  /**
   * The color of the elipsis.
   */
  itemColor?: string;

  /**
   * When this is true. The stepper would be flattened
   */
  flatten?: boolean;
};

function Elipsis(props: ElipsisProps) {
  const { size, activeIndex, itemColor = "white", flatten = false } = props;

  const items = Array(size).fill(null);

  return (
    <Elipsis.Wrapper>
      {items.map((_, index) => (
        <Elipsis.Item
          key={index}
          item-color={itemColor}
          flatten={flatten.toString()}
          active={index === activeIndex}
        ></Elipsis.Item>
      ))}
    </Elipsis.Wrapper>
  );
}

type ItemType = { active: boolean; "item-color": string; flatten: string };

Elipsis.Item = styled.button<ItemType>`
  border: none;
  display: block;
  padding: 0;
  margin: 0;

  cursor: pointer;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  opacity: 0.3;
  margin-right: 0.6875rem;
  background-color: ${(props) => props["item-color"]};

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
    `}

  ${(props) =>
    props.flatten === "true" &&
    css`
      width: 55px;
      height: 3px;
      border-radius: 0;
    `}
`;

Elipsis.Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Elipsis;
