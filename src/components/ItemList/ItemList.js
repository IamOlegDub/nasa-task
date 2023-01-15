import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import Item from "./Item";

export default function ItemList({ search, setItems, query }) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=100")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, [setItems]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <Loader />;
    } else {
        return (
            <Box sx={{ flexGrow: 1 }} mt={5}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {search().map((item) => (
                        <Grid item xs={2} sm={4} md={4} key={item.id}>
                            <Item item={item} query={query} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    }
}
