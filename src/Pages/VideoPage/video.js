import {Box} from "@mui/material";


function Video() {
    return (
        <Box sx={{px:10,py:12}}>
            <video width="100%" height="540" controls>
                <source src="https://youtu.be/O5Wdy0vUyLs"/>

            </video>

        </Box>
    );
}

export default Video;