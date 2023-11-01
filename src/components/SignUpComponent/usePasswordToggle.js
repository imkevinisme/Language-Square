import {
  faEye,
  faEyeSlash,
  faFontAwesome,
} from "@fortawesome/free-solid-svg-icons";
import FontAwesomeIcon from "@fortawesome/fontawesome-free";
import React, { useState } from "react";

export const usePasswordToggle = () => {
  const [visible, setVisibility] = useState(false);
  const icon = (
    <FontAwesomeIcon
      icon={visible ? faEyeSlash : faEye}
      onClick={() => setVisibility((visibility) => !visibility)}
    />
  );
  const inputType = visible ? "text" : "password";
  return [inputType, icon];
};
