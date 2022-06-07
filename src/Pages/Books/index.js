import { Box, Typography } from "@mui/material";
import BooksSlick from "./card";

function Books({limit}) {
  return (
    <Box
      sx={{
        py: 4,
        px: 13,
        mt: 8,

      }}
      id={"books"}
    >

            <Typography
                sx={{
                    fontSize: "35px",
                    fontWeight: "400",
                    letterSpacing:"1px",
                    lineHeight: "42px",
                    mb: 3,
                    fontFamily:"Montserrat",
                    color:"black",
                }}
            >
                Kitoblar
            </Typography>

      <BooksSlick/>
    </Box>
  );
}

export default Books;
