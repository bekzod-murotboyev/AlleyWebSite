import {Box, Typography} from "@mui/material";
import SimpleMap from "./map";


function MapPage() {
    return (
        <div>
            <Box
                sx={{
                    py: 8,
                    px: 13,
                }}
            >
                <Typography
                    sx={{
                        fontSize: "35px",
                        fontWeight: "400",
                        lineHeight: "42px",
                        mb: 5,
                        fontFamily:"Montserrat",
                    }}
                >
                    3d sayohat
                </Typography>
{/*<SimpleMap />*/}
            </Box>
        </div>
    );
}

export default MapPage;