import { FC } from "react";
import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  Controller,
  useFormContext,
} from "react-hook-form";
import { TextField } from "@mui/material";

type InputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  label?: string;
  placeholder?: string;
  margin?: number | string;
  width?: number | string;
  helperText?: string | null;
  isError?: boolean;
  background?: string;
};

const Input: FC<InputProps> = (props) => {
  const {
    name,
    label,
    margin,
    width,
    background,
    placeholder,
    rules,
    helperText,
    isError,
  } = props;
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, value, ...rest },
        fieldState: { error },
      }) => (
        <TextField
          {...rest}
          id={label}
          variant="outlined"
          style={{ margin, width, background }}
          placeholder={placeholder}
          value={value}
          helperText={helperText || error?.message}
          error={isError || error?.message !== undefined}
          onChange={onChange}
        />
      )}
    />
  );
};
export { Input };
