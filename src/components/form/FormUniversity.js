import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button, TextareaAutosize} from "@mui/material";
import {connect} from "react-redux";
import {create} from "../../store/reducer/university";
import {toast} from "react-toastify";

function FormUniversity({create}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get('name')
        const abbr = data.get('abbr')
        const description = data.get('description')
        if (name && abbr && description) {
            create({
                name,
                abbr,
                description
            })
        } else toast.error("You need to fill all blanks", {autoClose: 1000})
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                type={"text"}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="abbr"
                label="Short name"
                type="text"
                id="abbr"
                autoComplete="abbr"
            />
            <TextareaAutosize
                name={'description'}
                aria-label="Description"
                placeholder="You can write here about University"
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


export default connect((state) => (state), {create})(FormUniversity)