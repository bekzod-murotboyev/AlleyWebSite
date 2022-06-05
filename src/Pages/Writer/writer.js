import { Box, Typography } from "@mui/material";
import Swiper from "./swiper";

function Writers() {
  return (
    <Box
      sx={{
        py: 8,
        px: 13,
        borderTop: "1px solid grey",
        borderBottom: "1px solid grey",
      }}
    >
      <Typography
        sx={{
          fontSize: "35px",
          fontWeight: "700",
          lineHeight: "42px",
          mb: 5,
        }}
      >
        Yozuvchilar
      </Typography>
      <Swiper />
    </Box>
  );
}

export default Writers;
