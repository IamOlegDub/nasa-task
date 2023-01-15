import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import Results from "./Results";

import "./Filter.scss";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "5px",
    backgroundColor: alpha(theme.palette.common.white, 0.6),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.9),
    },
    border: "1px solid #EAEAEA",
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "25ch",
            "&:focus": {
                width: "50ch",
            },
        },
    },
}));

export default function Filter({ query, setQuery }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="c1">Filter by keywords</Typography>
            <Toolbar disableGutters className="toolbar">
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon color="action" />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </Search>
            </Toolbar>
            <Results />
        </Box>
    );
}
