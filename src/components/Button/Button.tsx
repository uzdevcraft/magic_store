import React from "react";
import { ButtonProps, Button } from "@telegram-apps/telegram-ui";

import "./Button.module.scss";

interface IProps extends ButtonProps {
  full?: boolean;
  text: React.ReactNode;
}

const ButtonComponent = ({ text, mode, full, ...props }: IProps) => {
  return (
    <Button
      classID={`btn-${mode ? mode : "filled"}`}
      mode={mode}
      stretched={full}
      {...props}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
