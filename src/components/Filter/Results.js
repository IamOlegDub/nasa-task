import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { Context } from "../../App";

export default function Results() {
    const results = useContext(Context);

    return <Typography variant="c1">Results: {results}</Typography>;
}
