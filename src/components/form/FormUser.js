import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {connect} from "react-redux";
import {create} from "../../store/reducer/user";
import {toast} from "react-toastify";
import {getAll} from "../../store/reducer/university";
import {useEffect, useState} from "react";

function FormUser({create, getAll, universities}) {


    useEffect(() => {
        getAll()
    }, [])

    const [university, setUniversity] = useState('');

    function handleChange(event) {
        setUniversity(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get('username')
        const password = data.get('password')

        if (username && password && university) {
            create({
                username,
                password,
                university_id: university
            })
        } else toast.error("You need to fill all blanks", {autoClose: 1000})
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">University</InputLabel>
                <Select
                    labelId="university"
                    id="university"
                    value={universities[0]}
                    label="University"
                    onChange={handleChange}
                >
                    {
                        universities ? universities.map(item => <MenuItem value={item.id}>{item.abbr}</MenuItem>) : ''
                    }
                </Select>
            </FormControl>
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


export default connect(({university: {universities}}) => ({universities}), {create, getAll})(FormUser)