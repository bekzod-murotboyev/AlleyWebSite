import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    styled,
    Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Slider from "react-slick";
import {useState} from "react";
import ModalForm from "../../components/modal/ModalForm";
// export default connect(({book: {books}}) => ({books}), {getAll})(Cards)

const Item = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "start",
    color: theme.palette.text.secondary,
}));

export default function BooksSlick() {

    const [open,setOpen]=useState(false)
    const[book,setBook]=useState({})

    // const basePath = 'http://50.116.20.197:9095/file/1?filename='
    // const basePath='https://adiblarxiyoboni.netlify.app/assets/images/'
    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]

    };

    function NameBook(item){
        setOpen(true)
        setBook(item)
    }

    const BooksData = [
        {
            imgUrl:"https://adiblarxiyoboni.netlify.app/assets/images/book1.png",
            name: "Beparvolikning nozik san'a",
            author: "Mark Menson",
            short_info: "37 000 UZS",
        },
        {
            imgUrl:"https://adiblarxiyoboni.netlify.app/assets/images/book1.png",
            name: " Imomning maneken qizi",
            author: "Omina Shenliko‘g‘li",
            short_info: "25 000 UZS",
        },
        {
            imgUrl:"https://adiblarxiyoboni.netlify.app/assets/images/book1.png",
            name: "Tafsiri Hilol(6 jild)",
            author: "Shayx Muhammad Sodiq",
            short_info: "599 000 UZS",
        },
        {    imgUrl:"https://adiblarxiyoboni.netlify.app/assets/images/book1.png",
             name: "Kimyoiy saodat",
             author: "Abu Homid G'azolliy",
             short_info: "85 000 UZS",
        },
        {            imgUrl:"https://adiblarxiyoboni.netlify.app/assets/images/book1.png",

            name: "Mo‘minning umr safari",
            author: "Shayx Muhammad Sodiq",
            short_info: "29 000 UZS",
        },
        {
            imgUrl:"https://adiblarxiyoboni.netlify.app/assets/images/book1.png",
            name: "Ilm olish sirlari",
            author: "Imom Zarnujiy",
            short_info: "45 000 UZS",
        },

        {
            imgUrl:"https://adiblarxiyoboni.netlify.app/assets/images/book1.png",
            name: "Yunus Emro va tasavvuf",
            author: "Mahmud As’ad Jo‘shon",
            short_info: "25 000 UZS",
        },
        {
            imgUrl:"https://adiblarxiyoboni.netlify.app/assets/images/book1.png",
            name: "Islom tarixidan oltin sahifalar",
            author: "Umaviylar davri",
            short_info: "55 000 UZS",
        },
        {
            imgUrl:"https://adiblarxiyoboni.netlify.app/assets/images/book1.png",
            name: "Hayotimni o‘zgartirgan olov",
            author: "Mahmud Olaqosh",
            short_info: "29 000 so'm",
        },
    ]


     return   <Box sx={{ overflow: "hidden" }}>

    <Slider {...settings}>

    {
            BooksData.map((i, index) => {

                    return (
                       <div>
                           <Card
                                       sx={{
                                           maxWidth: 345,
                                           transition: "0.2s",
                                           px: 2,
                                           py: 1,
                                           background: "#EDEDED",
                                           mx:1,
                                           "&:hover": {
                                               transform: "scale(1.02)",
                                           },
                                       }}
                                   >
                                       <CardMedia
                                           component="img"
                                           image={i.imgUrl}

                                           alt="wrong"
                                           sx={{px: 2, py: 1,minHeight:"300px"}}

                                       />
                                       <CardContent>
                                           <Typography
                                               gutterBottom
                                               sx={{fontSize: "15px"}}
                                               component="div"
                                           >
                                               {i.name}
                                           </Typography>
                                           <Typography
                                               sx={{fontSize: "14px"}}
                                               color="text.secondary"
                                           >
                                               {i.author}
                                           </Typography>
                                           <Typography sx={{fontSize: "10px", color: "black"}}>
                                               {i.short_info}
                                           </Typography>
                                       </CardContent>
                                       <CardActions
                                           sx={{
                                               display: "flex",
                                               justifyContent: "space-between",
                                               alignItems: "center",
                                           }}
                                       >
                                           <Button size="small" onClick={()=>NameBook(i)}>Sotib olish</Button>
                                           <FavoriteIcon
                                               sx={{
                                                   fontSize: "20px",
                                               }}
                                           />
                                       </CardActions>
                                   </Card>

                       </div>
                    );
            })
        }
    </Slider>

<ModalForm open={open} setOpen={setOpen} book={book}/>
</Box>

}



