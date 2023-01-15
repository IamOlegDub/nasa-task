import React from "react";
import { CardMedia, Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation } from "react-router-dom";

import "./ArticlePage.scss";
import { Container } from "@mui/system";

export default function ArticlePage() {
    const location = useLocation();
    const { item } = location.state;
    return (
        <div className="ArticlePage">
            <CardMedia
                sx={{ height: 245 }}
                image={item.imageUrl}
                title={item.title}
                className="ArticlePage__img"
            />
            <Box className="ArticlePage__content">
                <Container className="ArticlePage__content__container">
                    <Box className="ArticlePage__content__container__wrapper">
                        <Typography
                            variant="c3"
                            component="h5"
                            mt={6}
                            className="ArticlePage__content__container__wrapper__title"
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            variant="c6"
                            component="div"
                            className="ArticlePage__content__container__wrapper__description"
                        >
                            {item.summary}
                        </Typography>
                    </Box>
                    <Link to="/">
                        <Box className="ArticlePage__content__container__backLink">
                            <ArrowBackIcon className="ArticlePage__back-link__icon" />
                            <Typography
                                variant="c2"
                                className="ArticlePage__back-link__text"
                            >
                                Back to homepage
                            </Typography>
                        </Box>
                    </Link>
                </Container>
            </Box>
        </div>
    );
}
