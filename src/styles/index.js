import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontStyle: "normal",
        color: "#363636",
        c1: {
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "20px",
        },
        c2: {
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "150%",
        },
        c3: {
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "29px",
            marginBottom: "25px",
        },
        c4: {
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "150%",
        },
        c5: {
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "150%",
        },
        c6: {
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "150%",
            marginBottom: "20px",
        },
    },
});

export default theme;
