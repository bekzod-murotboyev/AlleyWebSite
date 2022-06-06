import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button, TextareaAutosize} from "@mui/material";
import {connect} from "react-redux";
import {create} from "../../store/reducer/news";
import {toast} from "react-toastify";

function FormNews({create}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const title = data.get('title')
        const body = data.get('body')
        if (title && body) {
            create({title, body})
        } else toast.error("You need to fill all blanks", {autoClose: 1000})
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
                autoFocus
            />
            <TextareaAutosize
                name={'body'}
                aria-label="Body"
                placeholder="You can write here about news"
                style={{width: '100%', height: 100}}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                Save
            </Button>
        </Box>
    )
}


export default connect((state) => (state), {create})(FormNews)