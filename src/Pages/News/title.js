import { Box, Typography } from "@mui/material";

function Title() {
  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "35px",
          fontWeight: "700",
          lineHeight: "42px",
          mb: 3,
        }}
      >
        Adiblar Xiyoboni haqida
      </Typography>
      <Typography
        sx={{
          fontSize: "25px",
          fontWeight: "400",
          lineHeight: "40px",
          textAlign: "center",
        }}
      >
        Mumtoz adabiyot vakillarini o’z ichiga jamlagan Adiblar xiyoboni
        2017-yil 18-aprelda Alisher Navoiy nomidagi Oʻzbekiston Milliy bogʻida
        barpo etildi.
      </Typography>
    </Box>
  );
}

export default Title;
