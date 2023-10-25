import { Box, LinearProgress, Typography } from "@mui/material";

export const ProgressBar = (props: { progressPercentage: number }) => {
  const { progressPercentage } = props;
  return (
    <>
      <Box sx={{ alignItems: "center", mb: "1rem" }}>
        <Box sx={{ color: "lightGrey", minWidth: 35 }}>
          <Typography variant="body1" textAlign="center">{`${Math.round(
            progressPercentage
          )}% validado`}</Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 2 }}>
          <LinearProgress
            sx={{ borderRadius: "3px", color: "#65c280cf" }}
            variant="determinate"
            color={progressPercentage === 100 ? `inherit` : `info`}
            value={progressPercentage}
            aria-busy="true"
            aria-describedby="holassss"
          />
        </Box>
      </Box>
    </>
  );
};
