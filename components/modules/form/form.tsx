import { FC } from "react";

type FormProps = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

const Form: FC<FormProps> = (props) => {
  const { children, ...rest } = props;
  return <form {...rest}>{children}</form>;
};

export { Form };
