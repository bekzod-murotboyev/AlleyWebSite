import { Box, Typography } from "@mui/material";
import Cards from "./card";

function Books() {
  return (
    <Box
      sx={{
        py: 4,
        px: 13,
        mt: 8,
      }}
    >
      <Typography
        sx={{
          fontSize: "35px",
          fontWeight: "700",
          lineHeight: "42px",
          mb: 3,
        }}
      >
        Kitoblar
      </Typography>
      <Cards />
    </Box>
  );
}

export default Books;
