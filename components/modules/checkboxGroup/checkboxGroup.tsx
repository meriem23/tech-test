import {
  Controller,
  useFormContext,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import {
  Checkbox,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";

type CheckboxGroupProps<
  T,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  label?: string;
  margin?: number | string;
  fullWidth?: boolean;
  disabled?: boolean;
  data: Array<T>;
  getOptionValue: (item: T) => string | number;
  getOptionLabel: (item: T) => string | number;
};

function CheckboxGroup<T>(props: CheckboxGroupProps<T>): JSX.Element {
  const {
    name,
    label,
    data,
    margin,
    fullWidth,
    disabled,
    rules,
    getOptionValue,
    getOptionLabel,
  } = props;
  const { control } = useFormContext();

  const renderItem = () => {
    return data.map((item, index) => {
      return (
        <FormControlLabel
          key={index}
          value={getOptionValue(item)}
          control={<Checkbox />}
          sx={{ textTransform: "capitalize" }}
          label={getOptionLabel(item)}
        />
      );
    });
  };
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, value, ...rest },
        fieldState: { error },
      }) => (
        <FormControl
          style={{ margin }}
          disabled={disabled || undefined}
          fullWidth={typeof fullWidth === "boolean" ? fullWidth : true}
        >
          <FormLabel id={label}>{label}</FormLabel>
          <RadioGroup
            aria-labelledby="row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={value}
            onChange={onChange}
          >
            {renderItem()}
          </RadioGroup>
          <FormHelperText error={error?.message !== null}>
            {error?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
}
export { CheckboxGroup };
