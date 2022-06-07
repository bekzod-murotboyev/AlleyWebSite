import { Box, Typography } from "@mui/material";
import WriterCard from "./swiper";
import {NavLink} from "react-router-dom";

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
    <NavLink to={'/writers'}>
        <Typography
            sx={{
                fontSize: "35px",
                lineHeight: "42px",
                mb: 5,
                color:"black",
                fontFamily:"Montserrat",
                fontWeight:"400",
                textDecoration:"none"
            }}
        >
            Yozuvchilar
        </Typography>
    </NavLink>

      <WriterCard />
    </Box>
  );
}

export default Writers;
