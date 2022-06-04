import { Box, Typography } from "@mui/material";
import back from "../../images/back.jpg";
function MainPage() {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${back})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "95vh",
        }}
      >
        <Box sx={{ padding: "185px 90px" }}>
          <Typography
            sx={{
              fontSize: "50px",
              color: "white",
              fontWeight: "700",
            }}
          >
            Adabiyot xalqning yuragi,
          </Typography>
          <Typography
            sx={{
              fontSize: "50px",
              color: "white",
              fontWeight: "700",
              marginBottom: "16px",
            }}
          >
            elning maʼnaviyatini ko‘rsatadi.
          </Typography>
          <Typography sx={{ fontSize: "25px", color: "white" }}>
            Shavkat Mirziyoyev
          </Typography>
          <Typography sx={{ fontSize: "25px", color: "white" }}>
            O’zbekiston Respublikasi Prezidenti
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default MainPage;
