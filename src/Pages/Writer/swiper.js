
import React from "react";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    styled,
    Typography,
} from "@mui/material";
const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));
export default function WriterCard() {
    const dataWriters = [
        {
            imgUrl:"https://adiblarxiyoboni.netlify.app/assets/images/adib1.png",
            name: "Cho'lpon",
            description: "Choʻlpon Abdulhamid Sulaymon oʻgʻli, asl ismi Abdulhamid Sulaymon oʻgʻli Yunusov — oʻzbek sovet shoiri, yozuvchi, dramaturg va publitsist, yangi oʻzbek sheʼriyati asoschilaridan biri. U o‘z asarlarini tahallus Cho‘lpon bilan imzolagan",

        },
        {
            imgUrl:"https://adiblarxiyoboni.netlify.app/assets/images/adib1.png",
            name: "Cho'lpon",
            description: "Choʻlpon Abdulhamid Sulaymon oʻgʻli, asl ismi Abdulhamid Sulaymon oʻgʻli Yunusov — oʻzbek sovet shoiri, yozuvchi, dramaturg va publitsist, yangi oʻzbek sheʼriyati asoschilaridan biri. U o‘z asarlarini tahallus Cho‘lpon bilan imzolagan",

        },
        {
            imgUrl:"https://adiblarxiyoboni.netlify.app/assets/images/adib1.png",
            name: "Cho'lpon",
            description: "Choʻlpon Abdulhamid Sulaymon oʻgʻli, asl ismi Abdulhamid Sulaymon oʻgʻli Yunusov — oʻzbek sovet shoiri, yozuvchi, dramaturg va publitsist, yangi oʻzbek sheʼriyati asoschilaridan biri. U o‘z asarlarini tahallus Cho‘lpon bilan imzolagan",

        },
        {
            imgUrl:"https://adiblarxiyoboni.netlify.app/assets/images/adib1.png",
            name: "Cho'lpon",
            description: "Choʻlpon Abdulhamid Sulaymon oʻgʻli, asl ismi Abdulhamid Sulaymon oʻgʻli Yunusov — oʻzbek sovet shoiri, yozuvchi, dramaturg va publitsist, yangi oʻzbek sheʼriyati asoschilaridan biri. U o‘z asarlarini tahallus Cho‘lpon bilan imzolagan",

        },




    ]

  return (
      <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
              {dataWriters.map((i, index) => {
                  return (

                          <Grid item xs={12} sm={6} md={3} key={index}>
                              <Item>
                                  <Card sx={{ maxWidth: 345 }}>
                                      <CardActionArea>
                                          <CardMedia
                                              component="img"
                                              height="140"
                                              image={i.imgUrl}
                                              alt="green iguana"


                                          />
                                          <CardContent>
                                              <Typography gutterBottom variant="h6" component="div">
                                                  {i.name}
                                              </Typography>
                                              <Typography variant="body2" color="text.secondary">
                                                  {i.description}
                                              </Typography>
                                          </CardContent>
                                      </CardActionArea>
                                  </Card>
                              </Item>
                          </Grid>

                  );
              })}
          </Grid>
      </Box>

  );
}
