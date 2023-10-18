import React from "react";

import { Button } from "@mui/material";

import { DisplayValidatedTextContext, IsCheckedContext } from "@/common";

export const ValidationButtons = () => {
  const { isChecked } = React.useContext(IsCheckedContext);

  const [isEnableValidation, setIsEnableValidation] = React.useState(true);
  const { displayValidatedText, setDisplayValidatedText } = React.useContext(
    DisplayValidatedTextContext
  );

  React.useEffect(() => {
    isChecked.length > 0 && isChecked.some((p) => p.checked)
      ? setIsEnableValidation(false)
      : setIsEnableValidation(true);
  }, [isChecked]);

  React.useEffect(() => {
    
  },[displayValidatedText])

  const handleIsValidatedRender = (textToDisplay: string) => {
    setDisplayValidatedText(textToDisplay);
  };

  return (
    <>
      <div className="validation-buttons-container">
        <Button
          variant="outlined"
          className="validation-button"
          disabled={isEnableValidation}
          onClick={() => handleIsValidatedRender("Validado")}
        >
          Validar
        </Button>
        <Button
          variant="outlined"
          className="reject-button"
          disabled={isEnableValidation}
          onClick={() => handleIsValidatedRender("Pendiente")}
        >
          Invalidar
        </Button>
      </div>
    </>
  );
};
