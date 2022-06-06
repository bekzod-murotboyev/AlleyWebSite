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
import {connect} from "react-redux";
import {getAll} from "../../store/reducer/book";
import {useEffect} from "react";

const Item = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "start",
    color: theme.palette.text.secondary,
}));

function Cards({getAll, books, limit}) {

    // const basePath = 'http://50.116.20.197:9095/file/1?filename='
    const basePath='https://adiblarxiyoboni.netlify.app/assets/images/'

    const temp = [
        {
            file_path: "book1.png",
            name: "Beparvolikning nozik san'a",
            author: "Mark Menson",
            short_info: "37 000 UZS",
        },
        {
            file_path: "book1.png",
            name: "Beparvolikning nozik san'a",
            author: "Mark Menson",
            short_info: "37 000 UZS",
        },
        {
            file_path: "book1.png",
            name: "Beparvolikning nozik san'a",
            author: "Mark Menson",
            short_info: "37 000 UZS",
        },
        {
            file_path: "book1.png",
            name: "Beparvolikning nozik san'a",
            author: "Mark Menson",
            short_info: "37 000 UZS",
        },
        {
            file_path: "book1.png",
            name: "Beparvolikning nozik san'a",
            author: "Mark Menson",
            short_info: "37 000 UZS",
        },
        {
            file_path: "book1.png",
            name: "Beparvolikning nozik san'a",
            author: "Mark Menson",
            short_info: "37 000 UZS",
        },
        {
            file_path: "book1.png",
            name: "Beparvolikning nozik san'a",
            author: "Mark Menson",
            short_info: "37 000 UZS",
        },
        {
            file_path: "book1.png",
            name: "Beparvolikning nozik san'a",
            author: "Mark Menson",
            short_info: "37 000 UZS",
        },
        {
            file_path: "book1.png",
            name: "Beparvolikning nozik san'a",
            author: "Mark Menson",
            short_info: "37 000 UZS",
        },
        {
            file_path: "book1.png",
            name: "Beparvolikning nozik san'a",
            author: "Mark Menson",
            short_info: "37 000 UZS",
        },
    ]

    useEffect(() => {
        getAll()
    }, [])

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                {
                    books ? temp.map((i, index) => {
                        if (index < limit)
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
                                                image={basePath + i.file_path}
                                                alt="something went wrong"
                                                sx={{px: 2, py: 1}}
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
                    }) : ''
                }
            </Grid>
        </Box>
    );
}

export default connect(({book: {books}}) => ({books}), {getAll})(Cards)
