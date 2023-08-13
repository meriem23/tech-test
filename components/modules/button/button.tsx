import { FC } from "react";
import Box from "@mui/material/Box";
import { LoadingButtonProps, LoadingButton } from "@mui/lab";

type ButtonProps = LoadingButtonProps & {
  children?: React.ReactNode;
  width?: number;
  height?: number;
  textColor?: string;
  backgroundColor?: string;
};

const Button: FC<ButtonProps> = (props) => {
  const { children, width, height, textColor, backgroundColor, ...rest } =
    props;
  return (
    <LoadingButton
      {...rest}
      style={{
        width,
        height,
        color: textColor,
        backgroundColor: backgroundColor,
      }}
      disabled={props.loading || props.disabled}
      startIcon={props.startIcon || <Box />}
    >
      {children}
    </LoadingButton>
  );
};

export { Button };
