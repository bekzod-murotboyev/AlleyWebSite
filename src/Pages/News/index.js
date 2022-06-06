import { Box, Typography } from "@mui/material";
import BasicGrid from "./cards";
import Title from "./title";

function News() {
  return (
    <Box sx={{ py: 5, px: 13 }} id={"news"}>
      <Title />
      <Box>
        <Typography
          sx={{
            fontSize: "35px",
            fontWeight: "700",
            lineHeight: "42px",
            my: 4,
            mt: 8,
          }}
        >
          Yangliklar va Tadbirlar
        </Typography>
        <BasicGrid />
      </Box>
    </Box>
  );
}

export default News;
