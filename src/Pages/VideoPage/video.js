import {Box} from "@mui/material";


function Video() {
    return (
        <Box sx={{px:10,py:12}}>
            <div>
                <iframe
                    src="https://youtube.com/embed/O5Wdy0vUyLs"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                    className='w-100'
                    style={{height:550}}
                />
            </div>
        </Box>
    );
}

export default Video;