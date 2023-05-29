import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const Search = () => {

    const handleClickSearch = () => {
        console.log("sdsdsds");
    }
    return (
        <>
            <FormControl className="search"
                sx={{
                    width: { lg: '60ch', xl: '80ch' },
                }}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-search" color="secondary">Rechercher dans mes citations</InputLabel>
                <OutlinedInput color="secondary" sx={{ borderRadius: 3, margin: 0 }}
                    id="outlined-adornment-search"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="click to search"
                                onClick={handleClickSearch}
                                edge="end"
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>}
                    label="Rechercher dans mes citations"
                />
            </FormControl>

        </>

    );

}

export default Search;