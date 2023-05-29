import { Box, Divider, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const CitationLine = ({ citation }) => {
    return (
        <>
            <Box sx={{ display: "flex", flexFlow: "row wrap", justifyContent: "center", position: { lg: "relative" } }}>
                <Typography align="center" fontStyle="italic" fontWeight="bold"> {citation} </Typography>
                <Box sx={{ position: { xl: "absolute" }, right: 0, minWidth: 65, mt: { xs: 3, xl: 0 } }}>
                    <DeleteIcon sx={{ cursor: "pointer" }} />
                    <EditIcon sx={{ marginLeft: 2, cursor: "pointer" }} />
                </Box>
            </Box>

            <Divider sx={{ width: "100%", margin: "25px 0" }} />
        </>
    );
}

export default CitationLine;