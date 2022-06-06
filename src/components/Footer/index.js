import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import {Nav} from "react-bootstrap";
function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#000000",
        py: 7,
        px: 13,
      }}
    >
      <Box>
        <Typography sx={{ color: "white", mb: 5 }} variant="h4">
          Adiblar Xiyoboni
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            color: "white",
          }}
        >
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <TelegramIcon />
        </Box>
      </Box>
      <Box sx={{}}>
        <Box sx={{ display: "flex", color: "white", gap: 1 }}>
          <LocationOnIcon />
          <Typography>
            Toshkent shahar, Yunusobod tumani, Minor mavzesi, Osiyo ko'chasi
            (Xurshid), 86A
          </Typography>
        </Box>
        <Box sx={{ display: "flex", color: "white", gap: 1, my: 4 }}>
          <EmailIcon />
          <Typography>info.vitc.uz</Typography>
        </Box>
        <Box sx={{ display: "flex", color: "white", gap: 1 }}>
          <CallIcon />
          <Typography>(78) 207 92 93</Typography>
        </Box>
      </Box>

          <Nav  style={{ fontSize: "20px",display:"flex",flexDirection:"column" }}>
              <Nav.Link href="#main"  className="py-1 px-3">
                  Asosiy
              </Nav.Link>

              <Nav.Link href="#news" className="py-1 px-3">
                  Yangiliklar
              </Nav.Link>
              <Nav.Link href="#books" className="py-1 px-3">
                  Kitoblar
              </Nav.Link>
              <Nav.Link href="#rasm" className="py-1 px-3">
                  Rasmlar
              </Nav.Link>
          </Nav>

    </Box>
  );
}

export default Footer;
