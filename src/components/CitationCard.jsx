import { Box, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';


const CitationCard = ({ citationObject, favoris }) => {

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                border: 4,
                borderColor: "#8F00FF",
                padding: {
                    xs: "40px 40px 10px",
                    sm: "40px 50px 20px",
                },
                borderRadius: 1
            }}>

            <Typography
                variant="h6"
                sx={{
                    width: {
                        xs: "100%",
                        sm: "80%",
                        md: "80%"
                    },
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#8F00FF",
                    margin: "auto"
                }}>
                “{citationObject.citation}“
            </Typography>

            <Typography
                sx={{
                    textAlign: {
                        xs: "center",
                        sm: "right",
                    },
                    fontStyle: "italic",
                    color: "#8F00FF",
                    margin: "15px 0"
                }}>
                {citationObject.infos && citationObject.infos.auteur}
            </Typography>

            <Typography sx={{ display: "flex", justifyContent: "center", textAlign: "center", }}>
                {favoris
                    ? <>
                        <StarIcon
                            sx={{
                                color: "#8F00FF"
                            }}
                        />
                        <a href="/">Rétirer des favoris</a>
                    </>

                    : <>
                        <StarBorderIcon
                            sx={{
                                color: "#8F00FF"
                            }}
                        />
                        <a href="/">Mettre en favoris</a>
                    </>
                }
            </Typography>

        </Box>
    );
}

export default CitationCard;