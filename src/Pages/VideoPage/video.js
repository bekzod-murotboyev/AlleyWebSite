import {Box} from "@mui/material";
import inVideo from '../../images/Toshkentdagi-Adiblar-xiyoboni.mp4'


function Video() {
    return (
        <Box sx={{px:10,py:12}}>
            <video width="100%" height="100%" controls>
                <source src={inVideo} type='video/mp4'/>
            </video>

        </Box>
    );
}

export default Video;