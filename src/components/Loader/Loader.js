import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import "./Loader.scss";

export default function Loader() {
    return (
        <div className="Loader">
            <div className="Loader__logo">
                <CircularProgress color="inherit" />
            </div>
        </div>
    );
}
