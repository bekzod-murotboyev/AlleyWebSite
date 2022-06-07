import { Box, Typography } from "@mui/material";
import BasicGrid from "./pic";
function Picture() {
  return (
    <Box sx={{ py: 5, px: 13 }} id={"picture"}>
      <Box>
        <Typography
          sx={{
            fontSize: "35px",
            fontWeight: "400",
            lineHeight: "42px",
              fontFamily:"Montserrat",
            my: 4,
            mt: 8,
          }}
        >
          Rasmlar
        </Typography>
      </Box>
      <BasicGrid />
    </Box>
  );
}

export default Picture;
