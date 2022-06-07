import {connect} from "react-redux";
import {Button, Card, CardActions, CardContent, CardMedia, Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ModalForm({open, setOpen,book}) {


    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <h5>{book.name}</h5>
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
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
                            image={book.imgUrl}

                            alt="wrong"
                            sx={{px: 2, py: 1,minHeight:"300px"}}

                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                sx={{fontSize: "15px"}}
                                component="div"
                            >
                                {book.name}
                            </Typography>
                            <Typography
                                sx={{fontSize: "14px"}}
                                color="text.secondary"
                            >
                                {book.author}
                            </Typography>
                            <Typography sx={{fontSize: "10px", color: "black"}}>
                                {book.short_info}
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
                </Typography>
            </Box>
        </Modal>
    );
}

export default connect(({user: {user}}) => ({user}), {})(ModalForm)