import React from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Box,
} from "@mui/material";
import * as dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Highlighter from "react-highlight-words";

import "./ItemList.scss";
import { Link } from "react-router-dom";

export default function Item({ item, query }) {
    dayjs.extend(advancedFormat);
    let date = dayjs(item.updatedAt).format("MMMM Do, YYYY");
    return (
        <Link to={`article_page/${item.id}`} state={{ item: item }}>
            <Card sx={{ maxWidth: 400, height: 530 }}>
                <CardActionArea className="itemList__CardActionArea">
                    <CardMedia
                        component="img"
                        sx={{ height: 217 }}
                        image={item.imageUrl}
                        title={item.title}
                    />
                    <CardContent className="itemList__CardActionArea__CardContent">
                        <Box className="itemList__CardActionArea__CardContent__date">
                            <DateRangeOutlinedIcon className="itemList__CardActionArea__CardContent__date__icon" />
                            <Typography
                                variant="c5"
                                display="block"
                                className="itemList__CardActionArea__CardContent__date__Typography"
                            >
                                {date}
                            </Typography>
                        </Box>
                        <Box className="itemList__CardActionArea__CardContent__info">
                            <Typography
                                variant="c3"
                                className="itemList__CardActionArea__CardContent__info__title"
                            >
                                <Highlighter
                                    highlightClassName="itemList__highlighter"
                                    searchWords={[`${query}`]}
                                    autoEscape={true}
                                    textToHighlight={item.title}
                                />
                            </Typography>
                            <Typography
                                variant="c4"
                                className="itemList__CardActionArea__CardContent__info__description"
                            >
                                <Highlighter
                                    highlightClassName="itemList__highlighter"
                                    searchWords={[`${query}`]}
                                    autoEscape={true}
                                    textToHighlight={item.summary}
                                />
                            </Typography>
                            <Box className="itemList__CardActionArea__CardContent__readMore">
                                <Typography variant="c2">Read more</Typography>
                                <ArrowForwardIcon className="itemList__CardActionArea__CardContent__readMore__icon" />
                            </Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}
