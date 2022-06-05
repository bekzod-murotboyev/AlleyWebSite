import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

export default function Cards() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {[
          {
            url: "https://adiblarxiyoboni.netlify.app/assets/images/book1.png",
            name: "Beparvolikning nozik san'a",
            author: "Mark Menson",
            price: "37 000 UZS",
          },
          {
            url: "https://adiblarxiyoboni.netlify.app/assets/images/book2.png",
            name: "Beparvolikning nozik san'a",
            author: "Mark Menson",
            price: "37 000 UZS",
          },
          {
            url: "https://adiblarxiyoboni.netlify.app/assets/images/book1.png",
            name: "Beparvolikning nozik san'a",
            author: "Mark Menson",
            price: "37 000 UZS",
          },
          {
            url: "https://adiblarxiyoboni.netlify.app/assets/images/book1.png",
            name: "Beparvolikning nozik san'a",
            author: "Mark Menson",
            price: "37 000 UZS",
          },
        ].map((i, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Item>
                <Card
                  sx={{
                    maxWidth: 345,
                    transition: "0.2s",
                    px: 2,
                    py: 1,
                    background: "#EDEDED",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={i.url}
                    alt="green iguana"
                    sx={{ px: 2, py: 1 }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ fontSize: "15px" }}
                      component="div"
                    >
                      {i.name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "14px" }}
                      color="text.secondary"
                    >
                      {i.author}
                    </Typography>
                    <Typography sx={{ fontSize: "10px", color: "black" }}>
                      {i.price}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Button size="small">Sotib olish</Button>
                    <FavoriteIcon
                      sx={{
                        fontSize: "20px",
                      }}
                    />
                  </CardActions>
                </Card>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
