import { Box, Typography } from "@mui/material";
import Cards from "./card";
import {NavLink} from "react-router-dom";

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
        <NavLink to={"/books"}>
            <Typography
                sx={{
                    fontSize: "35px",
                    fontWeight: "700",
                    lineHeight: "42px",
                    mb: 3,

                    color:"black",
                    ".MuiTypography - root":{
                        textDecoration:"none"
                    }
                }}
            >
                Kitoblar
            </Typography>
        </NavLink>
      <Cards limit={limit}/>
    </Box>
  );
}

export default Books;
