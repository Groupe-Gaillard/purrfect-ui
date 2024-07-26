import React from "react";
import styled, { css } from "styled-components";
import { theme } from "src/guidelines/theme";
import { sizing } from "src/utils/utils";

type AvatarSize = "small" | "medium" | "large";

const avatarSizes = (size?: AvatarSize) => {
  switch (size) {
    case "small":
      return css`
        height: ${sizing(32)};
        width: ${sizing(32)};
      `;
    case "medium":
      return css`
        height: ${sizing(48)};
        width: ${sizing(48)};
      `;
    case "large":
      return css`
        height: ${sizing(70)};
        width: ${sizing(70)};
      `;
  }
};

const fontSizeMap: { [key in AvatarSize]: string } = {
  small: `${theme.typographies.fontSize.base}`,
  medium: `${theme.typographies.fontSize.xxl}`,
  large: `${theme.typographies.fontSize.xxxl}`,
};

const StyledAvatar = styled.div<{ size?: AvatarSize; isDisabled?: boolean }>`
  border-radius: ${theme.borderRadius.round};
  box-shadow: ${theme.shadows.navigation};
  display: flex;
  align-items: center;
  font-family: sans-serif;
  font-size: ${(props) => fontSizeMap[props.size || "medium"]};
  font-weight: ${theme.typographies.fontWeight.bold};
  justify-content: center;
  background-color: ${theme.color.gray};
  color: ${theme.color.white};
  overflow: hidden;
  ${({ size }) => avatarSizes(size)};
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      filter: grayscale(100%);
      opacity: 0.5;
    `};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

type AvatarProps = {
  alt?: string;
  isDisabled?: boolean;
  size?: AvatarSize;
  src?: string;
  className?: string;
  username?: string;
};

const Avatar = ({
  src,
  alt,
  size,
  isDisabled,
  className,
  username,
}: AvatarProps) => {
  const getInitials = (name: string) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("");
    return initials.toUpperCase();
  };

  return (
    <StyledAvatar size={size} isDisabled={isDisabled} className={className}>
      {src ? (
        <Image src={src} alt={alt} />
      ) : username ? (
        getInitials(username)
      ) : (
        "N/A"
      )}
    </StyledAvatar>
  );
};

export default Avatar;
export type { AvatarProps };
