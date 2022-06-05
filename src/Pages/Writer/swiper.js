import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";

export default function Swiper() {
  const settings = {
    centerMode: true,
    infinite: true,

    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Box sx={{ overflow: "hidden", py: 8 }}>
      <Slider {...settings}>
        <Box>
          <Box sx={{ width: "380px" }}>
            <img
              src="https://adiblarxiyoboni.netlify.app/assets/images/adib1.png"
              alt=""
            />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "35px", fontWeight: "700" }}>
              Cho’lpon
            </Typography>
            <Typography>
              Choʻlpon Abdulhamid Sulaymon oʻgʻli, asl ismi Abdulhamid Sulaymon
              oʻgʻli Yunusov — oʻzbek sovet shoiri, yozuvchi, dramaturg va
              publitsist, yangi oʻzbek sheʼriyati asoschilaridan biri. U o‘z
              asarlarini tahallus Cho‘lpon bilan imzolagan
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box sx={{ width: "380px" }}>
            <img
              src="https://adiblarxiyoboni.netlify.app/assets/images/adib1.png"
              alt=""
            />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "35px", fontWeight: "700" }}>
              Cho’lpon
            </Typography>
            <Typography>
              Choʻlpon Abdulhamid Sulaymon oʻgʻli, asl ismi Abdulhamid Sulaymon
              oʻgʻli Yunusov — oʻzbek sovet shoiri, yozuvchi, dramaturg va
              publitsist, yangi oʻzbek sheʼriyati asoschilaridan biri. U o‘z
              asarlarini tahallus Cho‘lpon bilan imzolagan
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box sx={{ width: "380px" }}>
            <img
              src="https://adiblarxiyoboni.netlify.app/assets/images/adib1.png"
              alt=""
            />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "35px", fontWeight: "700" }}>
              Cho’lpon
            </Typography>
            <Typography>
              Choʻlpon Abdulhamid Sulaymon oʻgʻli, asl ismi Abdulhamid Sulaymon
              oʻgʻli Yunusov — oʻzbek sovet shoiri, yozuvchi, dramaturg va
              publitsist, yangi oʻzbek sheʼriyati asoschilaridan biri. U o‘z
              asarlarini tahallus Cho‘lpon bilan imzolagan
            </Typography>
          </Box>
        </Box>
      </Slider>
    </Box>
  );
}
