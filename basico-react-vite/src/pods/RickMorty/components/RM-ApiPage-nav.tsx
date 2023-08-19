import React from "react";

import { Button } from "@mui/material";

interface Props {
  handleNextApiPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handlePrevApiPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  apiPage: number;
  totalPages: number;
  alignment: string;
}

export const ApiPageNav: React.FC<Props> = (props) => {
  
  const { handleNextApiPage, handlePrevApiPage, apiPage, alignment } = props;

  const [apiTotlaPages, setApiTotalPages] = React.useState(1);

  React.useEffect(() => {
    const fetchForApiTotalPages = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/${alignment}`);
      const data = await response.json();

      setApiTotalPages(data.info.pages);
    };
    fetchForApiTotalPages();
  }, [alignment]);

  return (
    <>
      <div className="layout-app-nav">
        <Button
          variant="outlined"
          onClick={handlePrevApiPage}
          disabled={apiPage <= 1 ? true : false}
        >
          Prev 20
        </Button>
        <span>
          {apiPage}/{apiTotlaPages}
        </span>
        <Button
          variant="outlined"
          onClick={handleNextApiPage}
          disabled={apiPage >= apiTotlaPages ? true : false}
        >
          Next 20
        </Button>
      </div>
    </>
  );
};
