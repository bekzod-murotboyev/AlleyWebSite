import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
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

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {[
          {
            url: "https://adiblarxiyoboni.netlify.app/assets/images/event1.png",
            title: "Prezident Adiblar Xiyobonida.",
            words:
              "Barchamiz uchun taniqli va sevimli bo‘lgan Adiblar xiyoboni Toshkent shahridagi mutlaqo yangi va noyob maskanlardan biri hisoblanadi. Ushbu xiyobon Alisher Navoiy nomidagi O'zbekiston milliy...",
          },
          {
            url: "https://adiblarxiyoboni.netlify.app/assets/images/event2.png",
            title: "Prezident Adiblar Xiyobonida.",
            words:
              "Barchamiz uchun taniqli va sevimli bo‘lgan Adiblar xiyoboni Toshkent shahridagi mutlaqo yangi va noyob maskanlardan biri hisoblanadi. Ushbu xiyobon Alisher Navoiy nomidagi O'zbekiston milliy...",
          },
          {
            url: "https://adiblarxiyoboni.netlify.app/assets/images/event1.png",
            title: "Prezident Adiblar Xiyobonida.",
            words:
              "Barchamiz uchun taniqli va sevimli bo‘lgan Adiblar xiyoboni Toshkent shahridagi mutlaqo yangi va noyob maskanlardan biri hisoblanadi. Ushbu xiyobon Alisher Navoiy nomidagi O'zbekiston milliy...",
          },
          {
            url: "https://adiblarxiyoboni.netlify.app/assets/images/event4.png",
            title: "Prezident Adiblar Xiyobonida.",
            words:
              "Barchamiz uchun taniqli va sevimli bo‘lgan Adiblar xiyoboni Toshkent shahridagi mutlaqo yangi va noyob maskanlardan biri hisoblanadi. Ushbu xiyobon Alisher Navoiy nomidagi O'zbekiston milliy...",
          },
        ].map((i, index) => {
          return (
            <>
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={i.url}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {i.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {i.words}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Item>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Box>
  );
}
