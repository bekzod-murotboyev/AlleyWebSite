import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <img
              src="https://adiblarxiyoboni.netlify.app/assets/images/photo1.png"
              alt=""
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <img
              src="https://adiblarxiyoboni.netlify.app/assets/images/photo1.png"
              alt=""
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <img
              src="https://adiblarxiyoboni.netlify.app/assets/images/photo1.png"
              alt=""
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <img
              src="https://adiblarxiyoboni.netlify.app/assets/images/photo1.png"
              alt=""
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
