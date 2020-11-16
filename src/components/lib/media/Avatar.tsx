import React from "react";
import styled from "@emotion/styled";
import { sizes } from "settings/fonts";
import { css } from "@emotion/core";

export type AvatarProps = {
  /**
   * This is the path to the image. The image path that we want to get to
   */
  src: string;

  /**
   * Alt text that would be read to disabled users
   */
  alt: string;
  /**
   * A string value that specifies a size using any HTML units (px, rem, em etc.)
   */
  diameter: string;

  /**
   * This is background color that would be shown when the image is not found.
   *
   * By default this has a light color
   */
  backgroundColor?: string;

  /**
   * This text would be contained at the center of the if the image does not load.
   *
   */
  noImageText?: string;

  /**
   * When this is true the image would be shown as a square.
   * It defaults to false
   */

  showAsSquaare?: boolean;

  /**
   * This would determine the Avatar's frame thickness
   */

  frameWidth?: string;

  /**
   * This represents the frameColor
   */

  frameColor?: string;
};

export function Avatar(props: AvatarProps) {
  const {
    src,
    alt,
    diameter,
    frameColor = "#17cdff",
    showAsSquaare = false,
    backgroundColor = "#f4f6f8",
    noImageText,
    frameWidth = "2px",
  } = props;

  const paragraph = React.createRef<HTMLParagraphElement>();

  const onError = (e) => {
    e.target.style.display = "none";
    const current = paragraph?.current;

    if (!current) return;
    current.style.display = "flex";
  };

  return (
    <Avatar.Wrapper
      frame-width={frameWidth}
      diameter={diameter}
      role="image"
      background-color={backgroundColor}
      color={frameColor}
      is-square={!!showAsSquaare}
    >
      <img src={src} onError={onError} alt={alt} />
      <p ref={paragraph} className="text">
        {noImageText}
      </p>
    </Avatar.Wrapper>
  );
}

type AvatarWrapper = {
  diameter: string;
  color?: string;
  "background-color"?: string;
  "is-square": boolean;
  "frame-width": string;
};
Avatar.Wrapper = styled.div<AvatarWrapper>`
  box-sizing: content-box;
  width: ${(props) => props.diameter};
  height: ${(props) => props.diameter};
  background: ${(props) => props["background-color"]};
  border: ${(props) => props["frame-width"]} solid ${(props) => props.color};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  p {
    display: none;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: ${sizes.xxSmall};
  }

  ${(props) =>
    !props["is-square"] &&
    css`
      border-radius: 50%;
      img {
        border-radius: 50%;
      }
    `}
`;
