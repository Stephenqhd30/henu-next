import { Dropdown } from "antd";
import type { DropDownProps } from "antd/es/dropdown";
import React from "react";
import { createStyles } from "antd-style";
import { clsx } from "clsx";

const useStyles = createStyles(({ token }) => {
  return {
    dropdown: {
      [`@media screen and (max-width: ${token.screenXS}px)`]: {
        width: "40%",
      },
    },
  };
});

export type HeaderDropdownProps = {
  overlayClassName?: string;
  placement?:
    | "bottomLeft"
    | "bottomRight"
    | "topLeft"
    | "topCenter"
    | "topRight"
    | "bottomCenter";
} & Omit<DropDownProps, "overlay">;

/**
 * HeaderDropdown
 * @param cls
 * @param restProps
 * @constructor
 */
const HeaderDropdown: React.FC<HeaderDropdownProps> = ({
  overlayClassName: cls,
  ...restProps
}) => {
  const { styles } = useStyles();
  return (
    <Dropdown overlayClassName={clsx(styles.dropdown, cls)} {...restProps} />
  );
};

export default HeaderDropdown;
