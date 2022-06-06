import {connect} from "react-redux";
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormUser from "../form/FormUser";
import FormNews from "../form/FormNews";
import FormBook from "../form/FormBook";

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

function ModalForm({open, setOpen, type}) {

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <h5>Add {type}</h5>
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>

                </Typography>
            </Box>
        </Modal>
    );
}

export default connect(({user: {user}}) => ({user}), {})(ModalForm)