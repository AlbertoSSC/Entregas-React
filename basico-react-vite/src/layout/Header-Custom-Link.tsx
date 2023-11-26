import { Link as RouterLink } from "react-router-dom";

import { Link } from "@mui/material";

export const CustomLink = ({ to, ...props }) => {
  return (
    <Link
      underline="none"
      component={RouterLink}
      to={to}
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "120px",
        padding: 0.5,
        borderRadius: 1,
        backgroundColor:
          location.pathname === to
            ? " rgba(216, 216, 216, 0.5) "
            : "transparent",
        "&:hover": { backgroundColor: "#1976d2", color: "white" },
      }}
      {...props}
    />
  );
};
